import React, { Component } from 'react';
import { TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
@inject('Product')
@observer

class FilterProducts extends Component {
    render() {
        const { filterByName, sortingProduct } = this.props.Product;
        return (
            <div style={styles.searchContainer}>
                <TextField
                    onChange={(e) => filterByName(e)}
                    id="standard-with-placeholder"
                    label="Search product"
                    margin="normal"
                    style={{ width: '400px' }}
                />
                <FormControl style={{ marginTop: '7px', marginLeft: '15px' }}>
                    <InputLabel htmlFor="age-native-simple">Sort</InputLabel>
                    <Select
                        native
                        //   value={state.age}
                        onChange={(e) => sortingProduct(e)}
                    >
                        <option value="" />
                        <option value={10}>Price Up</option>
                        <option value={20}>Price Down</option>
                        <option value={30}>Rating Up</option>
                        <option value={40}>Rating Down</option>
                    </Select>
                </FormControl>
            </div>
        )
    }
}
const styles = {
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '100px'
    }
}
export default FilterProducts;