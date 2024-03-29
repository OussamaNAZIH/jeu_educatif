import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home5Page } from './home5.page';

describe('Home5Page', () => {
  let component: Home5Page;
  let fixture: ComponentFixture<Home5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Home5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
