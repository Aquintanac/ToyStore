import { Component, OnInit } from '@angular/core';
import { ProductsService } from './Services/products-service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        ConfirmationService,
        MessageService
    ]
})
export class AppComponent implements OnInit {
    title = 'toyStore';
    products: any[];
    displayEdit: boolean = false;
    isEdit: boolean = false;
    dialogHeader: string = 'Create product';

    productForm = new FormGroup({
        Id: new FormControl(''),
        Name: new FormControl('',
            [
                Validators.required,
                Validators.maxLength(50)
            ]),
        AgeRestriction: new FormControl('',
            [
                Validators.min(0),
                Validators.max(100)
            ]),
        Company: new FormControl('',
            [
                Validators.required,
                Validators.maxLength(50)
            ]),
        Price: new FormControl('',
            [
                Validators.required,
                Validators.min(1),
                Validators.max(1000)

            ]),
        Description: new FormControl('',
            [
                Validators.required,
                Validators.maxLength(100)
            ]),

    });

    constructor(private productsService: ProductsService,
        private confirmationService: ConfirmationService,
        private messageService: MessageService
    ) { }

    ngOnInit() {
        this.getAllProducts();
    }

    showCreateDialog() {
        this.dialogHeader = 'Create product';
        this.isEdit = false;
        this.displayEdit = true;
    }

    showEditDialog(product: any) {
        this.productForm.setValue(product);
        this.dialogHeader = 'Update product';
        this.isEdit = true;
        this.displayEdit = true;
    }

    showToast(severity: string, summary: string, detail: string) {
        this.messageService.add({ severity: severity, summary: summary, detail: detail });
    }

    createProduct() {
        this.displayEdit = false;
        if (this.productForm.valid) {
            let product = {
                name: this.productForm.value.Name,
                ageRestriction: this.productForm.value.AgeRestriction,
                company: this.productForm.value.Company,
                price: this.productForm.value.Price,
                description: this.productForm.value.Description
            };

            this.productsService.create(product).subscribe((data) => {
                if (data && data.Message.toLowerCase() === 'success') {
                    this.showToast('success', 'Succes', 'Product created');
                }
                else {
                    this.showToast('error', 'Error', 'Product not created');
                }
                this.getAllProducts();
            });
        }
    }

    updateProduct() {
        this.displayEdit = false;
        if (this.productForm.valid) {
            this.productsService.update(this.productForm.value).subscribe((data) => {
                if (data && data.Message.toLowerCase() === 'success') {
                    this.showToast('success', 'Succes', 'Product updated');
                    this.productForm.reset();
                    this.getAllProducts();
                }
                else {
                    this.showToast('error', 'Error', 'Product not updated');
                }
                
            });
        }
    }

    deleteProduct(id: number) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete the product?',
            header: 'Delete Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.productsService.delete(id).subscribe((data) => {
                    if (data && data.Message.toLowerCase() === 'success') {
                        this.showToast('success', 'Succes', 'Product deleted');
                    }
                    else {
                        this.showToast('error', 'Error', 'Product not deleted');
                    }
                    this.getAllProducts();
                });
            },
            reject: () => {
                this.showToast('info', 'Canceled', 'Product not deleted');
            }
        });
        
    }

    cancel() {
        this.displayEdit = false;
        this.productForm.reset();
    }

    private getAllProducts() {
        this.productsService.getAll().subscribe((data) => {
            if (data) {
                this.products = data;
            }
            else {
                this.products = null;
            }
        });
    }
}
