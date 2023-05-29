import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ArticleForm } from '@article/models/article-form.model';
import { ArticleFormService } from '@article/services/article-form.service';

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
  public form: FormGroup<ArticleForm> = inject(ArticleFormService).getArticleForm();

  public onSubmit(): void {
    console.log(this.form.getRawValue());
  }
}
