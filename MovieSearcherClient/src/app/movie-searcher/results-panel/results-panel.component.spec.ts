import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MovieDataService } from '../movie-data.service';

import { ResultsPanelComponent } from './results-panel.component';

describe('ResultsPanelComponent', () => {
  let component: ResultsPanelComponent;
  let fixture: ComponentFixture<ResultsPanelComponent>;

  let mockMovieDataService: MovieDataService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsPanelComponent ],
      providers:[{provide: MovieDataService, useValue: mockMovieDataService}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();    
    // movieDataService = TestBed.inject(MovieDataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Initialization', () => {
    it('Should initialize div container with header, page label and only next button', () => {       
      var el: HTMLElement = fixture.nativeElement;  
      var container = el.querySelector('div')
      expect(container).toBeTruthy();
      var childElements = [
        el.querySelector('button#next-button'),
        el.querySelector('p#results-header'),
        el.querySelector('div#page-label'),
        el.querySelector('div#movie-cards-container')
      ]
      childElements.forEach(element => {
        expect(element).toBeTruthy();
      });
    });
  });

  describe('Pagging', () => {
    it('Should be able to a page forward', () => {
      component.onGoNextPage();
      expect(component.currentPage).toBe(2);
    });

    it('Should be able to go a page back', () => {
      component.onGoNextPage();
      component.onGoPreviousPage();
      expect(component.currentPage).toBe(1);
    });
  });
});
