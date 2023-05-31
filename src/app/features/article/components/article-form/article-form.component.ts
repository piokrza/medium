import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ArticleFormMode } from '@article/enums/article-form-mode.enum';
import { ArticleForm } from '@article/models/article-form.model';
import { ArticlePayload } from '@article/models/article-payload.model';
import { ArticleFormService } from '@article/services/article-form.service';
import { BackendErrors } from '@core/models/backend-errors.model';

const ArticleFormImports: Array<any> = [
  CommonModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  TextFieldModule,
];
const ArticleFormProviders: Array<any> = [ArticleFormService];

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: ArticleFormImports,
  providers: ArticleFormProviders,
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ArticleFormComponent {
  @Input() public mode: ArticleFormMode = ArticleFormMode.CREATE;
  @Input() public isSubmitting: boolean = false;
  @Input() public errors: BackendErrors | null = null;

  @Output() public formSubmit: EventEmitter<ArticlePayload> = new EventEmitter<ArticlePayload>();

  public form: FormGroup<ArticleForm> = inject(ArticleFormService).getArticleForm();

  public onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAsDirty();
      return;
    }

    const articleFormValues: ArticlePayload = { ...this.form.getRawValue(), tagList: this.form.value.tagList!.split(' ') };

    console.log(articleFormValues);

    this.formSubmit.emit(articleFormValues);
  }
}
