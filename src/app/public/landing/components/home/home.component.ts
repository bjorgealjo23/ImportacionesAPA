import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroVideo', { static: false })
  videoElement?: ElementRef<HTMLVideoElement>;

  isLoading = true;
  videoFailed = false;
  private retryCount = 0;
  private maxRetries = 3;

  videoSrc = 'assets/videos/barcos.mp4';
  // videoSrc = 'assets/videos/barcosss.mp4';
  fallbackImage =
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&q=80';

  private isBrowser = typeof window !== 'undefined';

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.isBrowser && typeof window.requestAnimationFrame === 'function') {
      window.requestAnimationFrame(() => {
        this.initializeVideo();
      });
    } else {
      this.initializeVideo();
    }
  }

  ngOnDestroy() {
    const video = this.videoElement?.nativeElement;

    if (video instanceof HTMLVideoElement) {
      try {
        video.pause();
        video.src = '';
        video.load();
      } catch (err) {
        console.warn('No se pudo limpiar el video:', err);
      }
    }
  }

  private initializeVideo() {
    if (!this.videoElement?.nativeElement) {
      if (this.retryCount < this.maxRetries) {
        this.retryCount++;
        console.log(
          `Reintentando inicializar video (${this.retryCount}/${this.maxRetries})...`
        );
        setTimeout(() => {
          this.initializeVideo();
        }, 300);
        return;
      } else {
        console.warn('No se pudo encontrar el elemento video después de varios intentos');
        this.handleVideoError();
        return;
      }
    }

    this.setupVideo();
  }

  private setupVideo() {
    const video = this.videoElement!.nativeElement;

    if (!(video instanceof HTMLVideoElement)) {
      console.error('El elemento no es un HTMLVideoElement válido');
      this.handleVideoError();
      return;
    }

    console.log('Configurando video...');

    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.controls = false;
    video.preload = 'metadata';

    this.setupVideoEventListeners(video);
    this.loadVideoSource(video);
  }

  private setupVideoEventListeners(video: HTMLVideoElement) {
    video.removeEventListener('loadstart', this.onLoadStart);
    video.removeEventListener('canplay', this.onCanPlay);
    video.removeEventListener('loadeddata', this.onLoadedData);
    video.removeEventListener('error', this.onVideoError);

    video.addEventListener('loadstart', this.onLoadStart.bind(this));
    video.addEventListener('canplay', this.onCanPlay.bind(this));
    video.addEventListener('loadeddata', this.onLoadedData.bind(this));
    video.addEventListener('error', this.onVideoError.bind(this));
  }

  private onLoadStart = () => {
    console.log('Video: iniciando carga...');
    this.isLoading = true;
    this.cdr.detectChanges();
  };

  private onCanPlay = () => {
    console.log('Video: listo para reproducir');
    this.isLoading = false;
    this.cdr.detectChanges();
    this.tryPlayVideo();
  };

  private onLoadedData = () => {
    console.log('Video: datos cargados');
    this.isLoading = false;
    this.cdr.detectChanges();
  };

  private onVideoError = (event: any) => {
    console.error('Error en el video:', event);
    this.handleVideoError();
  };

  private loadVideoSource(video: HTMLVideoElement) {
    try {
      video.src = this.videoSrc;
      video.load();
      console.log('Video source establecida:', this.videoSrc);
    } catch (error) {
      console.error('Error al establecer el video source:', error);
      this.handleVideoError();
    }
  }

  private tryPlayVideo() {
    const video = this.videoElement?.nativeElement;

    if (video instanceof HTMLVideoElement) {
      video
        .play()
        .then(() => {
          console.log('Video reproduciéndose correctamente');
        })
        .catch((error) => {
          console.warn('Autoplay bloqueado (esto es normal):', error);
        });
    }
  }

  private handleVideoError() {
    console.log('Mostrando imagen de respaldo debido a error de video');
    this.isLoading = false;
    this.videoFailed = true;
    this.cdr.detectChanges();
  }

  playVideoManually() {
    if (this.videoElement?.nativeElement && !this.videoFailed) {
      this.tryPlayVideo();
    }
  }
}
