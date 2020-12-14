import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
// import { Link } from "react-router-dom";
import CustomTextField from "./CustomTextField";
import { commerce } from "../../lib/commerce";

export default function AddressForm({ checkoutToken }) {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  // const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  // const [shippingSubdivision, setShippingSubdivision] = useState("");
  // const [shippingOptions, setShippingOptions] = useState([]);
  // const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);

    setShippingCountry(Object.keys(countries)[0]);
  };
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={3}>
            <CustomTextField required name="firstName" label="First name" />
            <CustomTextField required name="lastName" label="Last name" />
            <CustomTextField required name="address1" label="Address line 1" />
            <CustomTextField required name="email" label="Email" />
            <CustomTextField required name="city" label="City" />
            <CustomTextField required name="zip" label="Zip / Postal code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {Object.entries(shippingCountries)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={""} fullWidth>
                <MenuItem key={""} value={""}>
                  Select me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={""} fullWidth>
                <MenuItem key={""} value={""}>
                  Select me
                </MenuItem>
              </Select>
            </Grid> */}
          </Grid>
          <br />
        </form>
      </FormProvider>
    </>
  );
}
