import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';

// function searchBarComponentSetup() {
//   return setupComponentForTest({
//     componentClass: SearchBarComponent,
//     driver: SearchBarComponentDriver
//   })
// }

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let debugElement: DebugElement;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    h1 = fixture.nativeElement.querySelector('h1');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header `Search&Watch`', () => {
    expect(component.header).toBe('Search&Watch')
  });

  it('should have an explaination phrases', () => {
    component.explainationPhrases.forEach(phrase => {
      expect(phrase).toBeTruthy();
    });
  });

  it('should have an ending phrase', () => {
    expect(component.endingPhrase).toBeTruthy();
  });

  it('should display original header after detectChanges()', () => {
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.header);
  });
});
