import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent1 } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent1;
  let fixture: ComponentFixture<SidebarComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
