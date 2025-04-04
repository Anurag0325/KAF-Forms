<template>
    <v-app>
        <v-container>
            <v-card class="pa-5">
                <v-row>
                    <v-col cols="12" md="9">
                        <p><strong>Doc. No:</strong> KAF-03</p>
                    </v-col>
                    <v-col cols="12" md="3">
                        <p><strong>Form:</strong> 2023.01</p>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-card-title>Quotation/Application QMS/EMS Certification</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field v-model="quotationNo" label="Quotation No" outlined required></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="date" label="Date" type="date" outlined required></v-text-field>
                            </v-col>
                        </v-row>

                        <v-text-field v-model="organization" label="Name of Organization" outlined required></v-text-field>

                        <v-divider></v-divider>

                        <!-- Stage 1 Audit -->
                        <v-card class="mb-3" outlined>
                            <v-card-title>Stage 1 Audit Fee</v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="4">
                                        <v-select
                                            v-model="stage1.currency"
                                            :items="currencies"
                                            label="Currency"
                                            outlined
                                            dense
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="8">
                                        <v-text-field v-model="stage1.fee" label="Amount" type="number" outlined dense></v-text-field>
                                    </v-col>
                                </v-row>
                                Stage 1 Audits are carried out to review the client’s management system documented information & evaluate 
                                the client’s site-specific conditions and to undertake discussions with the client’s personnel to determine 
                                the preparedness for stage 2 audits. At least some part of Stage 1 Audit has to be done onsite at the client’s premises.
                            </v-card-text>
                        </v-card>

                        <!-- Stage 2 Audit -->
                        <v-card class="mb-3" outlined>
                            <v-card-title>Stage 2 Audit Fee</v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="4">
                                        <v-select
                                            v-model="stage2.currency"
                                            :items="currencies"
                                            label="Currency"
                                            outlined
                                            dense
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="8">
                                        <v-text-field v-model="stage2.fee" label="Amount" type="number" outlined dense></v-text-field>
                                    </v-col>
                                </v-row>
                                The purpose of stage 2 is to evaluate the implementation, including effectiveness, of the client’s 
                                management system. The stage 2 shall take place at the site(s) of the client. In some cases, the audit 
                                may be done remotely as mutually agreed through ICT Tools.
                            </v-card-text>
                        </v-card>

                        <!-- Re-audit Fee -->
                        <v-card class="mb-3" outlined>
                            <v-card-title>Re-audit Fee</v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="4">
                                        <v-select
                                            v-model="reAudit.currency"
                                            :items="currencies"
                                            label="Currency"
                                            outlined
                                            dense
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="8">
                                        <v-text-field v-model="reAudit.fee" label="Amount" type="number" outlined dense></v-text-field>
                                    </v-col>
                                </v-row>
                                In case of non-compliance found in certification audit, the same is verified in the Re-audit.
                            </v-card-text>
                        </v-card>

                        <v-divider></v-divider>

                        <!-- Surveillance Options -->
                        <!-- <v-list>
                            <v-list-item>
                                <v-checkbox v-model="surveillance.A" label="Annual: 2 audits for 3-year period. Rs.12,000/- per year. Total Rs. 24,000/-"></v-checkbox>
                            </v-list-item>
                            <v-list-item>
                                <v-checkbox v-model="surveillance.B" label="First six-monthly & then annual audit: 3 audits for 3 years"></v-checkbox>
                            </v-list-item>
                            <v-list-item>
                                <v-checkbox v-model="surveillance.C" label="Five six-monthly audits for 3 years"></v-checkbox>
                            </v-list-item>
                        </v-list> -->

                        <!-- Surveillance Audit Checkboxes -->
                        <!-- <v-card class="mb-3" outlined>
                            <v-card-title>Surveillance Audit</v-card-title>
                            <v-card-text>
                                <v-checkbox 
                                    v-model="surveillance.A" 
                                    label="Annual: 2 audits for 3-year period." 
                                    dense class="my-0 py-0"
                                ></v-checkbox>
                                <v-checkbox 
                                    v-model="surveillance.B" 
                                    label="First six-monthly & then annual audit: 3 audits for 3 years" 
                                    dense class="my-0 py-0"
                                ></v-checkbox>
                                <v-checkbox 
                                    v-model="surveillance.C" 
                                    label="Five six-monthly audits for 3 years" 
                                    dense class="my-0 py-0"
                                ></v-checkbox>
                            </v-card-text>
                        </v-card> -->
                        <v-card class="mb-3" outlined>
                            <v-card-title>Surveillance Audit</v-card-title>
                            <v-card-text>
                                <v-radio-group v-model="surveillance" column>
                                    <v-radio 
                                        label="Annual: 2 audits for 3-year period." 
                                        value="Annual: 2 audits for 3-year period."
                                    ></v-radio>
                                    <v-radio 
                                        label="First six-monthly & then annual audit: 3 audits for 3 years" 
                                        value="First six-monthly & then annual audit: 3 audits for 3 years"
                                    ></v-radio>
                                    <v-radio 
                                        label="Five six-monthly audits for 3 years" 
                                        value="Five six-monthly audits for 3 years"
                                    ></v-radio>
                                </v-radio-group>
                            </v-card-text>
                        </v-card>

                        <!-- <v-row>
                            <v-col cols="12">
                                <h3>4. Surveillance Audit:</h3>
                            </v-col>
                            <v-col cols="12">
                                <v-checkbox 
                                    v-model="surveillance.A" 
                                    label="A. Annual: 2 audits for 3-year period. Rs. 12,000/- per year. Total Rs. 24,000/-" 
                                    dense class="my-0 py-0"
                                ></v-checkbox>
                                <v-checkbox 
                                    v-model="surveillance.B" 
                                    label="B. First six-monthly & then annual audit: 3 audits for 3 years" 
                                    dense class="my-0 py-0"
                                ></v-checkbox>
                                <v-checkbox 
                                    v-model="surveillance.C" 
                                    label="C. Five six-monthly audits for 3 years" 
                                    dense class="my-0 py-0"
                                ></v-checkbox>
                            </v-col>
                        </v-row> -->
                        <v-divider></v-divider>

                        <!-- Registration Fee Section -->
                        <v-card class="mb-3" outlined>
                            <v-card-title>Registration Fee Payable to KVQA</v-card-title>
                            <v-card-text>
                                KVQA Registration charges: Rs.10,000/-  
                                <br>Audit shall be done by Auditor from New Delhi.
                            </v-card-text>
                        </v-card>

                        <!-- Additional Notes -->
                        <v-card class="mb-3" outlined>
                            <v-card-title>Additional Notes:</v-card-title>
                            <v-card-text>
                                The above quotation is exclusive of all taxes. 18% GST is levied. Any tax arising must be borne by the client.  
                                <br>All travel and stay to be arranged by the client or if arranged by KVQA to be reimbursed at actual.  
                                <br>All travel by taxi, IIAC sleeper, and stay in AC rooms.  
                                <br><strong>This quotation is valid till 90 days from the date of issue.</strong>
                            </v-card-text>
                        </v-card>

                        <v-divider></v-divider>

                        <v-textarea v-model="additionalInfo" label="Additional Notes" outlined></v-textarea>

                        <v-divider></v-divider>

                        <v-row>
                            <v-col cols="6">
                                <v-text-field v-model="preparedBy" label="Prepared by" outlined required></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="designation" label="Designation" outlined required></v-text-field>
                            </v-col>
                        </v-row>

                        <v-btn color="primary" block @click="submitForm">Submit</v-btn>
                    </v-form>

                    <!-- FOOTER -->
                    <v-footer padless>
                        <v-container>
                            <v-row justify="center">
                                <v-col cols="12" class="text-center">
                                    <strong>Address:</strong> KVQA,  
                                    F-300, Sector-63, Noida-201301, U.P., India.  
                                    <br><strong>Phone:</strong> +91-9810059955  
                                    <br><strong>Email:</strong> info@iso-registration.com  
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-footer>
                </v-card-text>
            </v-card>
        </v-container>
    </v-app>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            quotationNo: '',
            date: '',
            organization: '',
            additionalInfo: '',
            preparedBy: '',
            designation: '',
            currencies: ["Rs", "USD", "EUR", "GBP"],
            stage1: { currency: "Rs", fee: 12000 },
            stage2: { currency: "Rs", fee: 12000 },
            reAudit: { currency: "Rs", fee: 4000 },
            surveillance: ''
        };
    },

    created() {
        this.fetchCompanyDetails();
        this.fetchAuditData();
    },

    methods: {
        fetchCompanyDetails() {
            const companyId = this.$route.params.companyId; // Fetching company_id from URL params
            console.log(companyId)
            axios
                .get(`http://127.0.0.1:5001/sales/company/${companyId}`)
                .then((response) => {
                    const data = response.data;
                    if (data.organization) {
                        this.organization = data.organization;
                    }
                })
                .catch((error) => {
                console.error("Error fetching company details:", error);
                });
        },

        fetchAuditData() {
            const companyId = this.$route.params.companyId; // Fetching company_id from URL params
            console.log(companyId)
            axios
                .get(`http://127.0.0.1:5001/sales/auditdata/${companyId}`)
                .then((response) => {
                    const data = response.data;
                    console.log(data)
                    if (data.quotationNo) {
                        this.quotationNo = data.quotationNo;
                    }
                })
                .catch((error) => {
                console.error("Error fetching company details:", error);
                });
        },

        submitForm() {
            const companyId = this.$route.params.companyId;  // Get company_id from URL

            const formData = {
                company_id: companyId,
                quotationNo: this.quotationNo,
                date: this.date,
                organization: this.organization,
                stage1: { currency: this.stage1.currency, fee: this.stage1.fee },
                stage2: { currency: this.stage2.currency, fee: this.stage2.fee },
                reAudit: { currency: this.reAudit.currency, fee: this.reAudit.fee },
                surveillance: this.surveillance, // A, B, or C
                additionalInfo: this.additionalInfo,
                preparedBy: this.preparedBy,
                designation: this.designation
            };

            axios
                .post('http://127.0.0.1:5001/submit-kaf3', formData)
                .then((response) => {
                    console.log(response.data.message);
                    alert("Form submitted successfully!");

                    this.$router.push('/sales/application');
                })
                .catch((error) => {
                    console.error("Error submitting form:", error);
                    alert("Failed to submit form.");
                });
        }
    }
};
</script>

<style scoped>
.v-container {
    max-width: 800px;
    margin: auto;
}
</style>

