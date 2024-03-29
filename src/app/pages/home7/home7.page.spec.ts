import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home7Page } from './home7.page';

describe('Home7Page', () => {
  let component: Home7Page;
  let fixture: ComponentFixture<Home7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Home7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
