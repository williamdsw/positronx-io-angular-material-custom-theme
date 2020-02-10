import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomThemeDemoComponent } from './custom-theme-demo.component';

describe('CustomThemeDemoComponent', () => {
  let component: CustomThemeDemoComponent;
  let fixture: ComponentFixture<CustomThemeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomThemeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomThemeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
