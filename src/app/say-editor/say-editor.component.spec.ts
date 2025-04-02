import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayEditorComponent } from './say-editor.component';

describe('SayEditorComponent', () => {
  let component: SayEditorComponent;
  let fixture: ComponentFixture<SayEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SayEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SayEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
