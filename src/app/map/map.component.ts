import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, inject } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements OnInit, OnDestroy {
  @ViewChild('map', { static: true }) mapElementRef!: ElementRef;
  center = { lat: 28.649944693035188, lng: 77.23961776224988 };
  map: any;
  marker: any;
  mapListener: any;
  markerListener: any;
  intersectionObserver: any;
  private renderer = inject(Renderer2);

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadMap();

    this.intersectionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('drop');
          this.intersectionObserver.unobserve(entry.target);
        }
      }
    });
  }

  async loadMap() {
    const { Map } = await google.maps.importLibrary('maps');

    const mapEl = this.mapElementRef.nativeElement;

    const location = new google.maps.LatLng(this.center.lat, this.center.lng);

    this.map = new Map(mapEl, {
      center: location,
      zoom: 14,
      mapId: 'f8debabefb6960f7',
    });

    this.renderer.addClass(mapEl, 'visible');
    this.addMarker(location);
  }

  async addMarker(location: any) {
    try {
      // Import the marker library
      const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary('marker');

      // Create a marker pin (Optional)
      const markerPin = new PinElement({
        background: '#76ba1b',
        scale: 2,
        borderColor: '#137333',
        glyphColor: '#137333',
      });

      // Create the AdvancedMarkerElement
      this.marker = new AdvancedMarkerElement({
        map: this.map,
        position: location,
        gmpDraggable: true,
        content: markerPin.element, // Use the pin element
      });

      // Debug the marker
      console.log('Marker added:', this.marker);

      // Add interaction styling
      const content = this.marker.content;
      content.style.opacity = '0';
      content.addEventListener('animationend', () => {
        content.classList.remove('drop');
        content.style.opacity = '1';
      });
      this.intersectionObserver.observe(content);

      // Add marker drag listener
      this.markerListener = this.marker.addListener('dragend', (event: any) => {
        console.log('Marker dragged to:', event.latLng.lat(), event.latLng.lng());
        this.marker.position = event.latLng;
        this.map.panTo(event.latLng);
      });

      // Add map click listener
      this.mapListener = this.map.addListener('click', (event: any) => {
        console.log('Map clicked at:', event.latLng.lat(), event.latLng.lng());
        this.marker.position = event.latLng;
        this.map.panTo(event.latLng);
      });
    } catch (error) {
      console.error('Error adding marker:', error);
    }
  }

  ngOnDestroy(): void {
    if (this.mapListener) {
      google.maps.event.removeListener(this.mapListener);
      this.mapListener = null;
    }
    if (this.markerListener) {
      this.marker.removeEventListener('dragend', this.markerListener);
      this.markerListener = null;
    }

    console.log('marker listener: ', this.markerListener);
    console.log('map listener: ', this.mapListener);
  }
}
