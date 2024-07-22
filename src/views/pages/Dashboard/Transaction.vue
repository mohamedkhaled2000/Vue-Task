<script setup>
import DataTable from 'primevue/datatable';
import { useAdminTransactionStore } from '@/store/Dashboard/transaction';
import { onMounted } from 'vue';
import Column from 'primevue/column';

const { loading, transactions, allTransaction, paginations } = useAdminTransactionStore();

onMounted(() => {
    allTransaction();
});

const getSeverity = (status) => {
    switch (status) {
        case 'paid':
            return 'success';

        case 'pending':
            return 'warn';

        case 'failed':
            return 'danger';

        default:
            return null;
    }
};
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">

                <DataTable ref="dt" :value="transactions" dataKey="id" :paginator="true" :loading="loading"
                    :totalRecords="paginations?.total" :rows="10"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
                    <!-- <template #header>
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                            <h5 class="m-0">Manage Products</h5>
                            <IconField iconPosition="left" class="block mt-2 md:mt-0">
                                <InputIcon class="pi pi-search" />
                                <InputText class="w-full sm:w-auto" v-model="filters['global'].value"
                                    placeholder="Search..." />
                            </IconField>
                        </div>
                    </template> -->
                    <Column field="id" header="#"></Column>
                    <Column field="user.name" header="User Name"></Column>
                    <Column field="amount" header="Amount"></Column>
                    <Column field="currency" header="Currency"></Column>
                    <Column field="payment_method" header="Payment Method"></Column>
                    <Column field="transaction_date" header="Transaction date"></Column>
                    <!-- <Column field="status" header="status"></Column> -->
                    <Column header="Status">
                        <template #body="slotProps">
                            <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>
