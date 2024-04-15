import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a navbar title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('nav').textContent).toContain('My App'); // Adjust 'My App' to match your expected title
  });

  it('should have a menu button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.menu-button')).toBeTruthy();
  });

  it('should toggle menu visibility when menu button is clicked', () => {
    const button = fixture.nativeElement.querySelector('.menu-button');
    const initialVisibility = component.isMenuVisible;
    button.click();
    fixture.detectChanges();
    expect(component.isMenuVisible).toEqual(!initialVisibility);
  });

  it('should close menu when an item is clicked', () => {
    component.isMenuVisible = true; // Open the menu
    fixture.detectChanges();
    const menuItems = fixture.nativeElement.querySelectorAll('.menu-item');
    menuItems[0].click(); // Simulate clicking the first menu item
    fixture.detectChanges();
    expect(component.isMenuVisible).toBeFalse(); // Assuming your flag for menu visibility is a boolean
  });
});
