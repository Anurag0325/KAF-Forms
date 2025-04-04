<!-- <template>
    <v-app>
        <v-container>
            <v-card class="pa-5">
                <v-card-title>Contract Review Report</v-card-title>
                <v-card-text>
                <v-text-field label="Organization" v-model="form.organization"></v-text-field>
                <v-text-field label="Quotation No." v-model="form.quotationNo"></v-text-field>
                <v-text-field label="Address" v-model="form.address"></v-text-field>
                
                <v-radio-group v-model="form.application" label="Application">
                    <v-radio label="Initial Audit" value="initial"></v-radio>
                    <v-radio label="Renewal Audit" value="renewal"></v-radio>
                </v-radio-group>
                
                <v-text-field label="Contract No." v-model="form.contractNo"></v-text-field>
                
                <v-select label="Size" v-model="form.size" :items="['Small', 'Medium', 'Large']"></v-select>
                
                <v-text-field label="No. of Employees" v-model="form.noOfEmployees" type="number"></v-text-field>
                <v-text-field label="Effective No. of Employees" v-model="form.effectiveNoOfEmployees" type="number"></v-text-field>
                
                <v-checkbox v-model="form.auditStandards" label="ISO 9001:2015" value="ISO 9001:2015"></v-checkbox>
                <v-checkbox v-model="form.auditStandards" label="ISO 14001:2015" value="ISO 14001:2015"></v-checkbox>
                <v-checkbox v-model="form.auditStandards" label="ISO 45001:2018" value="ISO 45001:2018"></v-checkbox>
                <v-checkbox v-model="form.auditStandards" label="ISO 27001:2013" value="ISO 27001:2013"></v-checkbox>
                <v-checkbox v-model="form.auditStandards" label="ISO 20000-1:2018" value="ISO 20000-1:2018"></v-checkbox>
                
                <v-text-field label="IAF Code" v-model="form.iafCode"></v-text-field>
                <v-text-field label="Complexity" v-model="form.complexity"></v-text-field>
                <v-text-field label="Audit Scope" v-model="form.auditScope"></v-text-field>
                
                <v-select label="On-site Type" v-model="form.onSiteType" :items="['Multi-site', 'Single site', 'Temporary site']"></v-select>
                
                <v-text-field label="Tentative Audit Schedule - Stage 1" v-model="form.stage1"></v-text-field>
                <v-text-field label="Tentative Audit Schedule - Stage 2" v-model="form.stage2"></v-text-field>
                
                <v-btn color="primary" @click="submitForm">Submit</v-btn>
                </v-card-text>
            </v-card>
        </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          organization: '',
          quotationNo: '',
          address: '',
          application: '',
          contractNo: '',
          size: '',
          noOfEmployees: '',
          effectiveNoOfEmployees: '',
          auditStandards: [],
          iafCode: '',
          complexity: '',
          auditScope: '',
          onSiteType: '',
          stage1: '',
          stage2: ''
        }
      };
    },
    methods: {
      submitForm() {
        console.log(this.form);
      }
    }
  };
  </script>
  
-->


<!-- <template>
    <v-container>
      <v-card class="pa-5">
        <v-card-title>Contract Review Report</v-card-title>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="Organization" v-model="form.organization" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Quotation No." v-model="form.quotationNo" required></v-text-field>
              </v-col>
            </v-row>
            
            <v-row>
              <v-col cols="12">
                <v-text-field label="Address" v-model="form.address" required></v-text-field>
              </v-col>
            </v-row>

            <v-row align="center">
                <v-col cols="12" md="3">
                    <label>Application:</label>
                </v-col>
                <v-col cols="12" md="4">
                    <v-checkbox v-model="form.initial" label="Initial Audit" value="Initial Audit" multiple density="compact" hide-details></v-checkbox>
                </v-col>
                <v-col cols="12" md="4">
                    <v-checkbox
                    v-model="form.renewal"
                    label="Renewal Audit"
                    value="Renewal Audit"
                    multiple
                    density="compact"
                    hide-details
                    ></v-checkbox>
                </v-col>
            </v-row>
            
            <v-row>
              <v-col cols="12" md="6">
                <v-select
                  label="Size"
                  v-model="form.size"
                  :items="['Small', 'Medium', 'Large']"
                ></v-select>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field label="No. of Employees" v-model="form.employees" type="number" required></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field label="Effective No. of Employees" v-model="form.employees_effetcive" type="number" required></v-text-field>
              </v-col>
            </v-row>
            

            <v-row align="center">
                <v-col cols="12" md="2">
                    <label>Audit Standards:</label>
                </v-col>
                <v-col cols="12" md="10" class="d-flex flex-wrap">
                    <v-checkbox
                        v-model="form.auditStandards"
                        value="ISO 9001:2015"
                        label="ISO 9001:2015"
                        density="compact"
                        hide-details
                    ></v-checkbox>
                    <v-checkbox
                        v-model="form.auditStandards"
                        value="ISO 14001:2015"
                        label="ISO 14001:2015"
                        density="compact"
                        hide-details
                    ></v-checkbox>
                    <v-checkbox
                        v-model="form.auditStandards"
                        value="ISO 45001:2018"
                        label="ISO 45001:2018"
                        density="compact"
                        hide-details
                    ></v-checkbox>
                    <v-checkbox
                        v-model="form.auditStandards"
                        value="ISO 27001:2022"
                        label="ISO 27001:2022"
                        density="compact"
                        hide-details
                    ></v-checkbox>
                    <v-checkbox
                        v-model="form.auditStandards"
                        value="ISO 20000-1:2018"
                        label="ISO 20000-1:2018"
                        density="compact"
                        hide-details
                    ></v-checkbox>
                </v-col>
            </v-row>
            
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="IAF Code" v-model="form.iafCode"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  label="Complexity"
                  v-model="form.complexity"
                  :items="['High', 'Medium', 'Low']"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Audit Scope" v-model="form.auditScope"></v-text-field>
              </v-col>
            </v-row>
          
            <v-row align="center">
                <v-col cols="12" md="3">
                    <label>On-site Type:</label>
                </v-col>
                <v-col cols="12" md="3">
                    <v-checkbox 
                        v-model="form.multiSite" 
                        label="Multi-site" 
                        value="Multi-site" 
                        multiple 
                        density="compact" 
                        hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols="12" md="3">
                    <v-checkbox
                        v-model="form.singleSite"
                        label="Single Site"
                        value="Single Site"
                        multiple
                        density="compact"
                        hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols="12" md="3">
                    <v-checkbox
                        v-model="form.temporarySite"
                        label="Temporary Site"
                        value="Temporary Site"
                        multiple
                        density="compact"
                        hide-details
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="2">

                    <label>Tentative Audit Schedule</label>
                </v-col>

                <v-col cols="12" md="10">
                <v-row>
                    <v-col cols="12" md="4">
                    <v-text-field
                        label="Stage 1 Audit Date"
                        v-model="form.stage1AuditDate"
                        type="date"
                    ></v-text-field>
                    </v-col>
                    
                    <v-col cols="12" md="4">
                    <v-text-field
                        label="Any Other Audit Date"
                        v-model="form.anyOtherAuditDate"
                        type="date"
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                    <v-text-field
                        label="Stage 2 Audit Date"
                        v-model="form.stage2AuditDate"
                        type="date"
                    ></v-text-field>
                    </v-col>
                </v-row>


                <v-table>
                  <v-row>
                    <v-col cols="12" md="3">
                      <v-row>
                        <v-col cols="12">
                          <p>Doc Audit</p>
                          <v-row>
                            <v-col cols="12" md="6">
                              <p>Days:</p>
                              <v-text-field v-model="form.docauditdays"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <p>Fee</p>
                              <v-text-field v-model="form.docauditfee"></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-row>
                        <v-col cols="12">
                          <p>pre-Audit</p>
                          <v-row>
                            <v-col cols="12" md="6">
                              <p>Days:</p>
                              <v-text-field v-model="form.preauditdays"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <p>Fee</p>
                              <v-text-field v-model="form.preauditfee"></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-row>
                        <v-col cols="12">
                          <p>On-site audit</p>
                          <v-row>
                            <v-col cols="12" md="6">
                              <p>Days:</p>
                              <v-text-field v-model="form.onsiteauditdays"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <p>Fee</p>
                              <v-text-field v-model="form.onsiteauditfee"></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-row>
                        <v-col cols="12">
                          <p>Total Fee</p>
                          <v-row>
                            <v-col cols="12">
                              <v-row style="min-height: 45px;"></v-row>
                              <v-text-field v-model="form.totalfee" required></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-table>

                <v-row>
                  <v-col cols="12" md="4">
                      <v-text-field label="Fee for 2 per 3 yrs" v-model="form.twoPerThreeFee" type="number"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                      <v-text-field label="Fee for 3 per 3 yrs Fee" v-model="form.threePerThreeFee" type="number"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                      <v-text-field label="Fee for 5 per 3 yrs Fee" v-model="form.fivePerThreeFee" type="number"></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                      <v-text-field label="Calculation (Total number of md(s))" v-model="form.calculation" readonly></v-text-field>
                  </v-col>
                  <v-col cols="12" md="3">
                      <v-text-field label="Signature" v-model="form.signature"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="3">
                      <v-text-field label="Date" v-model="form.date" type="date"></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            
            <v-divider class="my-4"></v-divider>
            <v-btn color="primary" @click="submitForm">Submit</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          organization: '',
          quotationNo: '',
          address: '',
          initial: '',
          renewal: '',
          size: '',
          employees: '',
          auditStandards: [],
          iafCode: '',
          auditScope: '',
          onSiteType: '',
          stage1: '',
          stage2: '',
          employees_effetcive: '',
          complexity: '',
          multiSite: '',
          singleSite: '',
          temporarySite: '',
          stage1Date: "",
          docAuditDays: "",
          docAuditFee: "",
          preAuditDays: "",
          preAuditFee: "",
          onSiteAuditDays: "",
          onSiteAuditFee: "",
          totalFee: "",
          stage2: "",
          stage2Date: "",
          stage2Fee: "",
          signature: "",
          signatureDate: "",
          calculation: "",
          twoPerThreeFee: "",
          threePerThreeFee: "",
          fivePerThreeFee: "",
          twoPerThreeFeeTotal: "",
          threePerThreeTotal: "",
          fivePerThreeTotal: "",
          twoPerThree: "",
          threePerThree: "",
          fivePerThree: "",
          docAuditDays: "",
          docAuditFee: "",
          preAuditDays: "",
          preAuditFee: "",
          onsiteauditdays: "",
          onsiteauditfee: "",
          totalfee: "",
          docauditdays: "",
          docauditfee: "",
          preauditdays: "",
          preauditfee: "",
          stage2AuditDate: "",
          stage1AuditDate: "",
          anyOtherAuditDate: "",
        },
      };
    },
    methods: {
      submitForm() {
        console.log('Form Submitted:', this.form);
      },
    },
  };
  </script>
  
  <style scoped>
  </style> -->

  
  <template>
    <v-container>
      <v-card class="pa-5">
        <v-row>
          <v-col cols="12" md="9">
            <p><strong>Doc. No:</strong> KAF-02</p>
          </v-col>
          <v-col cols="12" md="3">
            <p><strong>Form:</strong> 2023.01</p>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-card-title>Contract Review Report</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submitForm">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="Organization" v-model="form.organization" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Quotation No." v-model="form.quotationNo" required></v-text-field>
              </v-col>
            </v-row>
            
            <v-row>
              <v-col cols="12">
                <v-text-field label="Address" v-model="form.address" required></v-text-field>
              </v-col>
            </v-row>

            <!-- <v-row align="center">
                <v-col cols="12" md="2">
                    <label>Application:</label>
                </v-col>
                <v-col cols="12" md="4">
                    <v-checkbox v-model="form.initial" label="Initial Audit" value="Initial Audit" multiple density="compact" hide-details></v-checkbox>
                </v-col>
                <v-col cols="12" md="4">
                    <v-checkbox
                    v-model="form.renewal"
                    label="Renewal Audit"
                    value="Renewal Audit"
                    multiple
                    density="compact"
                    hide-details
                    ></v-checkbox>
                </v-col>
            </v-row> -->

            <v-row align="center">
                <v-col cols="12" md="2">
                    <label>Application:</label>
                </v-col>
                <v-col cols="12" md="10" class="d-flex flex-wrap">
                    <v-checkbox v-model="form.application" label="Initial Audit" value="Initial Audit" multiple density="compact" hide-details></v-checkbox>
                    <v-spacer></v-spacer>
                    <v-checkbox
                    v-model="form.application"
                    label="Renewal Audit"
                    value="Renewal Audit"
                    multiple
                    density="compact"
                    hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols="12" md="4">
                    
                </v-col>
            </v-row>
            
            <v-row>
              <v-col cols="12" md="6">
                <v-select
                  label="Size"
                  v-model="form.size"
                  :items="['Small', 'Medium', 'Large']"
                ></v-select>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field label="No. of Employees" v-model="form.employees" type="number" required></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field label="Effective No. of Employees" v-model="form.employees_effetcive" type="number" required></v-text-field>
              </v-col>
            </v-row>

            <v-row align="center">
                <v-col cols="12" md="2">
                    <label>Audit Standards:</label>
                </v-col>
                <v-col cols="12" md="10" class="d-flex flex-wrap">
                    <v-checkbox
                        v-model="form.auditStandards"
                        value="ISO 9001:2015"
                        label="ISO 9001:2015"
                        density="compact"
                        hide-details
                    ></v-checkbox>
                    <v-checkbox
                        v-model="form.auditStandards"
                        value="ISO 14001:2015"
                        label="ISO 14001:2015"
                        density="compact"
                        hide-details
                    ></v-checkbox>
                    <v-checkbox
                        v-model="form.auditStandards"
                        value="ISO 45001:2018"
                        label="ISO 45001:2018"
                        density="compact"
                        hide-details
                    ></v-checkbox>
                    <v-checkbox
                        v-model="form.auditStandards"
                        value="ISO 27001:2022"
                        label="ISO 27001:2022"
                        density="compact"
                        hide-details
                    ></v-checkbox>
                    <v-checkbox
                        v-model="form.auditStandards"
                        value="ISO 20000-1:2018"
                        label="ISO 20000-1:2018"
                        density="compact"
                        hide-details
                    ></v-checkbox>
                </v-col>
            </v-row>
            
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="IAF Code" v-model="form.iafCode"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  label="Complexity"
                  v-model="form.complexity"
                  :items="['High', 'Medium', 'Low']"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Audit Scope" v-model="form.auditScope"></v-text-field>
              </v-col>
            </v-row>

            <v-row align="center">
                <v-col cols="12" md="3">
                    <label>On-site Type:</label>
                </v-col>
                <v-col cols="12" md="9" class="d-flex flex-wrap">
                    <v-checkbox 
                        v-model="form.onsitetype" 
                        label="Multi-site" 
                        value="Multi-site" 
                        multiple 
                        density="compact" 
                        hide-details
                    ></v-checkbox>
                    <v-checkbox
                        v-model="form.onsitetype"
                        label="Single Site"
                        value="Single Site"
                        multiple
                        density="compact"
                        hide-details
                    ></v-checkbox>
                    <v-checkbox
                        v-model="form.onsitetype"
                        label="Temporary Site"
                        value="Temporary Site"
                        multiple
                        density="compact"
                        hide-details
                    ></v-checkbox>
                </v-col>
            </v-row>
            <!-- <v-row align="center">
                <v-col cols="12" md="3">
                    <label>On-site Type:</label>
                </v-col>
                <v-col cols="12" md="3">
                    <v-checkbox 
                        v-model="form.multiSite" 
                        label="Multi-site" 
                        value="Multi-site" 
                        multiple 
                        density="compact" 
                        hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols="12" md="3">
                    <v-checkbox
                        v-model="form.singleSite"
                        label="Single Site"
                        value="Single Site"
                        multiple
                        density="compact"
                        hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols="12" md="3">
                    <v-checkbox
                        v-model="form.temporarySite"
                        label="Temporary Site"
                        value="Temporary Site"
                        multiple
                        density="compact"
                        hide-details
                    ></v-checkbox>
                </v-col>
            </v-row> -->

            <v-row>
                <!-- Fixed md=6 for Tentative Audit Schedule -->
                <v-col cols="12" md="2">
                <!-- <v-card>
                    <v-card-title>Tentative Audit Schedule</v-card-title>
                </v-card> -->
                    <label>Tentative Audit Schedule</label>
                </v-col>

                <!-- Fixed md=10 for the rest -->
                <v-col cols="12" md="10">
                <v-row>
                    <!-- Stage 1 Audit -->
                    <v-col cols="12" md="4">
                    <v-text-field
                        label="Stage 1 Audit Date"
                        v-model="form.stage1AuditDate"
                        type="date"
                    ></v-text-field>
                    </v-col>
                    
                    <!-- Any Other Audit -->
                    <v-col cols="12" md="4">
                    <v-text-field
                        label="Any Other Audit Date"
                        v-model="form.anyOtherAuditDate"
                        type="date"
                    ></v-text-field>
                    </v-col>

                    <!-- Stage 2 Audit -->
                    <v-col cols="12" md="4">
                    <v-text-field
                        label="Stage 2 Audit Date"
                        v-model="form.stage2AuditDate"
                        type="date"
                    ></v-text-field>
                    </v-col>
                </v-row>

                <v-table>
                  <v-row>
                    <v-col cols="12" md="3">
                      <v-row>
                        <v-col cols="12">
                          <p>Doc Audit</p>
                          <v-row>
                            <v-col cols="12" md="6">
                              <p>Days:</p>
                              <v-text-field v-model="form.docauditdays" type="number"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <p>Fee</p>
                              <v-text-field v-model="form.docauditfee" type="number"></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-row>
                        <v-col cols="12">
                          <p>pre-Audit</p>
                          <v-row>
                            <v-col cols="12" md="6">
                              <p>Days:</p>
                              <v-text-field v-model="form.preauditdays" type="number"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <p>Fee</p>
                              <v-text-field v-model="form.preauditfee" type="number"></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-row>
                        <v-col cols="12">
                          <p>On-site audit</p>
                          <v-row>
                            <v-col cols="12" md="6">
                              <p>Days:</p>
                              <v-text-field v-model="form.onsiteauditdays" type="number"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <p>Fee</p>
                              <v-text-field v-model="form.onsiteauditfee" type="number"></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-row>
                        <v-col cols="12">
                          <p>Total Fee</p>
                          <v-row>
                            <v-col cols="12">
                              <!-- <p>dasasda</p> -->
                              <v-row style="min-height: 45px;"></v-row>
                              <v-text-field v-model="form.totalfee" type = "number" required></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-table>

                <!-- Fee Breakdown (2 per 3 yrs, 3 per 3 yrs, 5 per 3 yrs) -->
                <v-row>
                  <v-col cols="12" md="4">
                      <v-text-field label="Fee for 2 per 3 yrs" v-model="form.twoPerThreeFee" type="number"></v-text-field>
                      <!-- <v-text-field label="Total" v-model="form.twoPerThreeTotal" readonly></v-text-field> -->
                  </v-col>
                  <v-col cols="12" md="4">
                      <v-text-field label="Fee for 3 per 3 yrs Fee" v-model="form.threePerThreeFee" type="number"></v-text-field>
                      <!-- <v-text-field label="Total" v-model="form.threePerThreeTotal" readonly></v-text-field> -->
                  </v-col>
                  <v-col cols="12" md="4">
                      <v-text-field label="Fee for 5 per 3 yrs Fee" v-model="form.fivePerThreeFee" type="number"></v-text-field>
                      <!-- <v-text-field label="Total" v-model="form.fivePerThreeTotal" readonly></v-text-field> -->
                  </v-col>
                </v-row>

                <!-- Calculation and Signature -->
                <v-row>
                  <v-col cols="12" md="6">
                      <v-text-field label="Calculation (Total number of md(s))" v-model="form.calculation" readonly></v-text-field>
                  </v-col>
                  <v-col cols="12" md="3">
                      <v-text-field label="Signature" v-model="form.signature"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="3">
                      <v-text-field label="Date" v-model="form.date" type="date"></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-table class="bordered-table" density="compact">
              <thead>
                <!-- Single Parent Row spanning across the entire table -->
                <tr>
                  <th colspan="12" class="parent-row">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Initial Audit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                      Tick the appropriate row and assign reason &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                      Reassessment
                  </th>
                </tr>
        
                <!-- Column Headers for Initial Audit -->
                <tr>
                  <th rowspan="2">Effective Number of Personnel</th>
                  <th colspan="4">Audit Duration (Stage 1 + Stage 4 Days)</th>
                  <th rowspan="2"></th> <!-- Empty Column for Separation -->
                  <th rowspan="2">Effective Number of Personnel</th>
                  <th colspan="4">Audit Duration (Stage 1 + Stage 2 Days)</th>
                </tr>
                <tr>
                  <th>HIGH</th>
                  <th>MEDIUM</th>
                  <th>LOW</th>
                  <th>Lim</th>
                  <th>HIGH</th>
                  <th>MEDIUM</th>
                  <th>LOW</th>
                  <th>Lim</th>
                </tr>
              </thead>
              <!-- <tbody>
                <tr v-for="(row, index) in initialAuditData" :key="index">
                  <td>{{ row.personnel }}</td>
                  <td>{{ row.high }}</td>
                  <td>{{ row.medium }}</td>
                  <td>{{ row.low }}</td>
                  <td>{{ row.lim }}</td>
                  <td></td>
                  <td>{{ reassessmentData[index]?.personnel || '' }}</td>
                  <td>{{ reassessmentData[index]?.high || '' }}</td>
                  <td>{{ reassessmentData[index]?.medium || '' }}</td>
                  <td>{{ reassessmentData[index]?.low || '' }}</td>
                  <td>{{ reassessmentData[index]?.lim || '' }}</td>
                </tr>
              </tbody> -->
              <tbody>
                <tr v-for="(row, index) in initialAuditData" :key="index">
                  <td>{{ row.personnel }}</td>
                  <td>
                    <v-checkbox
                      :model-value="isChecked(row, 'high', 'initial') && matchedRange.section === 'initial'"
                      :disabled="true"
                    ></v-checkbox>
                    {{ row.high }}
                  </td>
                  <td>
                    <v-checkbox
                      :model-value="isChecked(row, 'medium', 'initial') && matchedRange.section === 'initial'"
                      :disabled="true"
                    ></v-checkbox>
                    {{ row.medium }}
                  </td>
                  <td>
                    <v-checkbox
                      :model-value="isChecked(row, 'low', 'initial') && matchedRange.section === 'initial'"
                      :disabled="true"
                    ></v-checkbox>
                    {{ row.low }}
                  </td>
                  <td>
                    <v-checkbox
                      :model-value="isChecked(row, 'lim', 'initial') && matchedRange.section === 'initial'"
                      :disabled="true"
                    ></v-checkbox>
                    {{ row.lim }}
                  </td>
                  <td></td> <!-- Empty Column for Separation -->
                  <td>{{ reassessmentData[index]?.personnel || '' }}</td>
                  <td>
                    <v-checkbox
                      :model-value="isChecked(reassessmentData[index], 'high', 'reassessment') && matchedRange.section === 'reassessment'"
                      :disabled="true"
                    ></v-checkbox>
                    {{ reassessmentData[index]?.high || '' }}
                  </td>
                  <td>
                    <v-checkbox
                      :model-value="isChecked(reassessmentData[index], 'medium', 'reassessment') && matchedRange.section === 'reassessment'"
                      :disabled="true"
                    ></v-checkbox>
                    {{ reassessmentData[index]?.medium || '' }}
                  </td>
                  <td>
                    <v-checkbox
                      :model-value="isChecked(reassessmentData[index], 'low', 'reassessment') && matchedRange.section === 'reassessment'"
                      :disabled="true"
                    ></v-checkbox>
                    {{ reassessmentData[index]?.low || '' }}
                  </td>
                  <td>
                    <v-checkbox
                      :model-value="isChecked(reassessmentData[index], 'lim', 'reassessment') && matchedRange.section === 'reassessment'"
                      :disabled="true"
                    ></v-checkbox>
                    {{ reassessmentData[index]?.lim || '' }}
                  </td>
                </tr>
              </tbody>
            </v-table>
            
            <v-divider class="my-4"></v-divider>
            <v-btn color="primary" @click="submitForm">Submit</v-btn>
          </v-form>
        </v-card-text>
        <v-alert v-if="message" :type="messageType" class="mt-3">
          {{ message }}
        </v-alert>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    data() {
      return {
        form: {
          // organization: '',
          // quotationNo: '',
          // address: '',
          // initial: '',
          // renewal: '',
          // size: '',
          // employees: '',
          // auditStandards: [],
          // iafCode: '',
          // auditScope: '',
          // onSiteType: '',
          // stage1: '',
          // stage2: '',
          // employees_effetcive: '',
          // complexity: '',
          // multiSite: '',
          // singleSite: '',
          // temporarySite: '',
          // stage1Date: "",
          // docAuditDays: "",
          // docAuditFee: "",
          // preAuditDays: "",
          // preAuditFee: "",
          // onSiteAuditDays: "",
          // onSiteAuditFee: "",
          // totalFee: "",
          // stage2: "",
          // stage2Date: "",
          // stage2Fee: "",
          // signature: "",
          // signatureDate: "",
          // calculation: "",
          // twoPerThreeFee: "",
          // threePerThreeFee: "",
          // fivePerThreeFee: "",
          // twoPerThreeFeeTotal: "",
          // threePerThreeTotal: "",
          // fivePerThreeTotal: "",
          // twoPerThree: "",
          // threePerThree: "",
          // fivePerThree: "",
          // docAuditDays: "",
          // docAuditFee: "",
          // preAuditDays: "",
          // preAuditFee: "",
          // onsiteauditdays: "",
          // onsiteauditfee: "",
          // totalfee: "",
          // docauditdays: "",
          // docauditfee: "",
          // preauditdays: "",
          // preauditfee: "",
          // stage2AuditDate: "",
          // stage1AuditDate: "",
          // anyOtherAuditDate: "",

          organization: '',
          quotationNo: '',
          address: '',
          // initial: '',
          // renewal: '',
          application: [],
          size: '',
          employees: '',
          employees_effetcive: '',
          auditStandards: [],
          iafCode: '',
          complexity: '',
          auditScope: '',
          // multiSite: '',
          // singleSite: '',
          // temporarySite: '',
          onsitetype: [],
          stage1AuditDate: '',
          anyOtherAuditDate: '',
          stage2AuditDate: '',
          docauditdays: 0,
          docauditfee: 0,
          preauditdays: 0,
          preauditfee: 0,
          onsiteauditdays: 0,
          onsiteauditfee: 0,
          totalfee: 0,
          twoPerThreeFee: '',
          threePerThreeFee: '',
          fivePerThreeFee: '',
          calculation: 0,
          signature: 'Lav Kaushik',
          date: '',
        },
        message: "",
        messageType: "success",
        // 
        initialAuditData: [
          { personnel: "1-5", range: [1, 5], high: 3, medium: 2.5, low: 2.5, lim: 2.5 },
          { personnel: "6-10", range: [6, 10], high: 3.5, medium: 3, low: 3, lim: 3 },
          { personnel: "11-15", range: [11, 15], high: 4.5, medium: 3.5, low: 3, lim: 3 },
          { personnel: "16-25", range: [16, 25], high: 5.5, medium: 4.5, low: 3.5, lim: 3 },
          { personnel: "26-45", range: [26, 45], high: 7, medium: 5.5, low: 4, lim: 3 },
          { personnel: "46-65", range: [46, 65], high: 8, medium: 6, low: 4.5, lim: 3.5 },
          { personnel: "66-85", range: [66, 85], high: 9, medium: 7, low: 5, lim: 3.5 },
          { personnel: "86-125", range: [86, 125], high: 11, medium: 8, low: 5.5, lim: 4 },
          { personnel: "126-175", range: [126, 175], high: 12, medium: 9, low: 6, lim: 4.5 },
          { personnel: "176-275", range: [176, 275], high: 18, medium: 10, low: 7, lim: 5 },
          { personnel: "276-425", range: [276, 425], high: 15, medium: 11, low: 8, lim: 5.5 },
          { personnel: "426-625", range: [426, 625], high: 16, medium: 12, low: 9, lim: 6 }
        ],

        reassessmentData: [
          { personnel: "626-875", range: [626, 875], high: 17, medium: 18, low: 10, lim: 6.5 },
          { personnel: "876-1175", range: [876, 1175], high: 19, medium: 15, low: 11, lim: 7 },
          { personnel: "1176-1550", range: [1176, 1550], high: 20, medium: 16, low: 12, lim: 7.5 },
          { personnel: "1551-2025", range: [1551, 2025], high: 21, medium: 17, low: 12, lim: 8 },
          { personnel: "2026-2675", range: [2026, 2675], high: 23, medium: 18, low: 18, lim: 8.5 },
          { personnel: "2676-3450", range: [2676, 3450], high: 25, medium: 19, low: 14, lim: 9 },
          { personnel: "3451-4350", range: [3451, 4350], high: 27, medium: 20, low: 15, lim: 10 },
          { personnel: "4351-5450", range: [4351, 5450], high: 28, medium: 21, low: 16, lim: 11 },
          { personnel: "5451-6800", range: [5451, 6800], high: 30, medium: 23, low: 17, lim: 12 },
          { personnel: "6801-8500", range: [6801, 8500], high: 32, medium: 25, low: 19, lim: 18 },
          { personnel: "8501-10700", range: [8501, 10700], high: 34, medium: 27, low: 20, lim: 14 },
          { personnel: ">10700", range: [10701, Infinity], high: "Follow progression above", medium: "", low: "", lim: "" }
        ],
      };
    },

    created() {
      this.fetchCompanyDetails();
    },

    computed: {
      matchedRange() {
        const num = parseInt(this.form.employees_effetcive, 10);
        if (isNaN(num)) return null;

        // First, check if the number falls in initialAuditData
        const initialMatch = this.initialAuditData.find(row => num >= row.range[0] && num <= row.range[1]);
        if (initialMatch) return { ...initialMatch, section: "initial" };

        // If not found, check in reassessmentData
        const reassessmentMatch = this.reassessmentData.find(row => num >= row.range[0] && num <= row.range[1]);
        if (reassessmentMatch) return { ...reassessmentMatch, section: "reassessment" };

        return null;
      }
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
                this.form.organization = data.organization;
                this.form.address = data.address;
            }
            })
            .catch((error) => {
            console.error("Error fetching company details:", error);
            });
        },

        async submitForm() {
        try {
          const response = await axios.post("http://127.0.0.1:5001/submit-kaf2", this.form);
          this.message = response.data.message;
          this.messageType = "success";

          this.$router.push("/sales/application");

        } catch (error) {
          this.message = error.response?.data?.error || "Form submission failed!";
          this.messageType = "error";
        }
      },

      isChecked(row, column) {
        if (!this.matchedRange) return false; // Ensure a valid match exists

        // Ensure this row corresponds to the matched personnel range
        if (row.personnel !== this.matchedRange.personnel) return false;

        // Ensure the correct section is being checked
        const isInitialSection = this.matchedRange.section === "initial";
        const isReassessmentSection = this.matchedRange.section === "reassessment";

        // If checking initialAuditData, only allow if the matched range is for initial
        if (this.initialAuditData.includes(row) && !isInitialSection) return false;

        // If checking reassessmentData, only allow if the matched range is for reassessment
        if (this.reassessmentData.includes(row) && !isReassessmentSection) return false;

        // Select the correct column based on selected size
        return (
          (column === "high" && this.form.size === "Large") ||
          (column === "medium" && this.form.size === "Medium") ||
          (column === "low" && this.form.size === "Small") ||
          (column === "lim" && this.form.size === "Limited")
        );
      }
    },

    watch: {
      // Watch all form fields and update total dynamically
      form: {
        handler() {
          this.form.calculation =
            (parseInt(this.form.docauditdays) || 0) +
            (parseInt(this.form.preauditdays) || 0) +
            (parseInt(this.form.onsiteauditdays) || 0);

          this.form.totalfee =
            (parseFloat(this.form.docauditfee) || 0) +
            (parseFloat(this.form.preauditfee) || 0) +
            (parseFloat(this.form.onsiteauditfee) || 0);
          },
        deep: true,
        immediate: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add borders to the table */
  .bordered-table {
    border-collapse: collapse;
    width: 100%;
  }
  
  .bordered-table th, .bordered-table td {
    border: 1px solid black; /* Adds border to each cell */
    text-align: center;
    padding: 8px;
  }
  
  .bordered-table th {
    background-color: #f0f0f0; /* Light grey background for headers */
    font-weight: bold;
  }
  
  .parent-row {
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #d3d3d3;
    text-align: center;
  }
  </style>