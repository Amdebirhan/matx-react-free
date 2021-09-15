import React, { useState } from 'react'
import { Formik } from 'formik'
import {
    Grid,
    Card,
    Divider,
    TextField,
    MenuItem,
    Button,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { updateVendor } from '../../redux/actions/VendorAction'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { useHistory } from 'react-router-dom'
const VendorForm = () => {
    const id = localStorage.getItem('vendorid')
    const history = useHistory()
    const [state, setState] = useState({})
    const dispatch = useDispatch()
    const { vendorList } = useSelector((state) => state.vendor)
    console.log(vendorList)
   
    for (let i = 0; i < vendorList.length; i++) {
        if (vendorList[i]._id === id) {
            console.log(id)
            state.first_name = vendorList[i].first_name
            state.email = vendorList[i].email
            state.work_phone_no = vendorList[i].work_phone_no
            state.mobile_phone_no = vendorList[i].mobile_phone_no
            state.country = vendorList[i].country
            state.city = vendorList[i].city
            state.company_Name = vendorList[i].company_Name
            state.state = vendorList[i].city
        }
    }

  const  handleChange = (e)=>{
        this.setState = {
            company_Name : e.target.value
        }
    }
  
    const handleSubmit = async (values, { isSubmitting }) => {
        dispatch(updateVendor(values, id))
        localStorage.removeItem('id')
        history.push('/pages/vendor-list')
    }

    return (
        <div className="m-sm-30">
            <Card elevation={3}>
                <div className="flex p-4">
                    <h4 className="m-0">Update Vendor</h4>
                </div>
                <Divider className="mb-2" />

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        setSubmitting,
                        setFieldValue,
                    }) => (
                        <form className="p-4" onSubmit={handleSubmit}>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item md={2} sm={4} xs={12}>
                                    Vendor Name
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="First Name"
                                        name="firstName"
                                        size="small"
                                        variant="outlined"
                                        value={values.firstName}
                                        onChange={handleChange}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="Last Name"
                                        name="lastName"
                                        size="small"
                                        variant="outlined"
                                        value={state.lastName || ''}
                                        onChange={handleChange}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Company Name
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="company_Name"
                                        name="company_Name"
                                        size="small"
                                        variant="outlined"
                                        value={values.company_Name}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Email
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <ValidatorForm>
                                        <TextValidator
                                            className="mb-6 "
                                            variant="outlined"
                                            size="small"
                                            label="Email"
                                            onChange={handleChange}
                                            type="email"
                                            name="email"
                                            value={state.email}
                                        />

                                    </ValidatorForm>

                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Phone
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                    <ValidatorForm>
                                        <TextValidator
                                            className="mb-6 "
                                            variant="outlined"
                                            size="small"
                                            label="Work Phone"
                                            onChange={handleChange}
                                            type="number"
                                            name="work_phone_no"
                                            value={state.work_phone_no}
                                        />

                                    </ValidatorForm>

                                </Grid>
                                <Grid item md={7} sm={8} xs={12}>
                                    <ValidatorForm>
                                        <TextValidator
                                            className="mb-6 "
                                            variant="outlined"
                                            size="small"
                                            label="Mobile Phone"
                                            onChange={handleChange}
                                            type="number"
                                            name="mobile_phone_no"
                                            value={state.mobile_phone_no}
                                        />

                                    </ValidatorForm>

                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    Country
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Country"
                                        name="country"
                                        size="small"
                                        variant="outlined"
                                        value={state.country}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    State
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="State"
                                        name="state"
                                        size="small"
                                        variant="outlined"
                                        value={state.state}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    City
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="city"
                                        name="city"
                                        size="small"
                                        variant="outlined"
                                        value={state.city}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                            </Grid>

                            <div className="mt-6">
                                <Button
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </Card>
        </div>
    )
}


const vendorList = [
    'Vendor 1',
    'Vendor 2',
    'Vendor 3',
    'Vendor 4',
    'Vendor 5',
]

const initialValues = {
    customerType: '',
    otherField: 'Adjustment',
}

export default VendorForm