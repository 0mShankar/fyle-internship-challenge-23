import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-title').textContent).toContain('Test Title');
  });

  it('should display the correct content', () => {
    component.content = 'Test Content';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-content').textContent).toContain('Test Content');
  });

  it('should emit an event when the card is clicked', () => {
    let emittedValue = '';
    component.cardClicked.subscribe((value: string) => (emittedValue = value));
    const cardElement = fixture.nativeElement.querySelector('.card');
    cardElement.click();
    expect(emittedValue).toEqual(component.title);
  });

  it('should apply the correct CSS class when isSelected is true', () => {
    component.isSelected = true;
    fixture.detectChanges();
    const cardElement = fixture.nativeElement.querySelector('.card');
    expect(cardElement.classList.contains('selected')).toBeTrue();
  });

  it('should not apply the selected class when isSelected is false', () => {
    component.isSelected = false;
    fixture.detectChanges();
    const cardElement = fixture.nativeElement.querySelector('.card');
    expect(cardElement.classList.contains('selected')).toBeFalse();
  });
});
