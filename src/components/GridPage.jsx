import React, { useState } from 'react';
import { sampleProducts } from '../common/sample-products';
import { MyCommandCell } from './MyCommandCell.jsx';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import ThemeChooser from './ThemeChooser';

const GridPage = (props) => {
    const editField = "inEdit";
    const [data, setData] = useState(sampleProducts);
    const [dataState, setDataState ] = useState({skip: 0, take: 10 })

    const generateId = data => data.reduce((acc, current) => Math.max(acc, current.ProductID), 0) + 1;

    const removeItem = (data, item) => {
        let index = data.findIndex(p => p === item || item.ProductID && p.ProductID === item.ProductID);
        if (index >= 0) {
            data.splice(index, 1);
        }
    }


    const enterEdit = (dataItem) => {
        setData(data.map(item =>
            item.ProductID === dataItem.ProductID ?
                { ...item, inEdit: true } : item
        ));
    }

    const remove = (dataItem) => {

        const newData = [...data];
        removeItem(newData, dataItem);
        removeItem(sampleProducts, dataItem);
        setData([...newData]);
    }

    const add = (dataItem) => {
        dataItem.inEdit = undefined;
        dataItem.ProductID = generateId(sampleProducts);

        sampleProducts.unshift(dataItem);
        setData([...data])
    }

    const discard = (dataItem) => {
        const newData = [data];
        removeItem(newData, dataItem);

        setData(newData);
    }

    const update = (dataItem) => {
        const newData = [...data]
        const updatedItem = { ...dataItem, inEdit: undefined };

        updateItem(newData, updatedItem);
        updateItem(sampleProducts, updatedItem);

        setData(newData);
    }

    const cancel = (dataItem) => {
        const originalItem = sampleProducts.find(p => p.ProductID === dataItem.ProductID);
        const newData = data.map(item => item.ProductID === originalItem.ProductID ? originalItem : item);

        setData(newData);
    }

    const updateItem = (data, item) => {
        let index = data.findIndex(p => p === item || (item.ProductID && p.ProductID === item.ProductID));
        if (index >= 0) {
            data[index] = { ...item };
        }
    }

    const itemChange = (event) => {
        const newData = data.map(item =>
            item.ProductID === event.dataItem.ProductID ?
                { ...item, [event.field]: event.value } : item
        );
        setData(newData);
    }

    const addNew = () => {
        const newDataItem = { inEdit: true, Discontinued: false };
        setData([newDataItem, ...data]);
    }

    const cancelCurrentChanges = () => {
        setData([...sampleProducts]);
    }
    let CommandCell = MyCommandCell({
        edit: enterEdit,
        remove: remove,

        add: add,
        discard: discard,

        update: update,
        cancel: cancel,

        editField: editField
    });
    const hasEditedItem = data.some(p => p.inEdit);
    return (
        <div className="container-fluid">
            <ThemeChooser changeTheme={props.changeTheme} theme={props.theme}/>
            <div className='row my-4'>
                <div className='col-12 col-lg-9 border-right'>
                    <Grid
                        data={process(data, dataState)}
                        onItemChange={itemChange}
                        editField={editField}
                        // pageable // uncomment to enable paging
                        // sortable // uncomment to enable sorting
                        // filterable // uncomment to enable filtering
                        // onDataStateChange={(e) => setDataState(e.data)} // uncomment to enable data operations
                        // {...dataState} // uncomment to enable data operations
                    >
                        <GridToolbar>
                            <button
                                title="Add new"
                                className="k-button k-primary"
                                onClick={addNew}
                            >
                                Add new
                </button>
                            {hasEditedItem && (
                                <button
                                    title="Cancel current changes"
                                    className="k-button"
                                    onClick={cancelCurrentChanges}
                                >
                                    Cancel current changes
                    </button>
                            )}
                        </GridToolbar>
                        <Column field="ProductID" title="id" width="50px" editable={false} />
                        <Column field="ProductName" title="technologie name" width="150px"/>
                        <Column field="UnitsInStock" title="depuis l'année" width="114px"/>
                        <Column field="Discontinued" title="Discontinued" editable={false} />
                        <Column cell={CommandCell} width="144px" title="   "/>
                    </Grid>
                </div>
                <div className='col-12 col-lg-3 mt-3 mt-lg-0'>
                    <h3>Mon CV et la lettre de motivation</h3>
                    <p>trouver un document en format pdf</p>
                    <p><a href="https://drive.google.com/drive/folders/1gzl9aTIxbnP7o33JxF-OVyQjcNbuIw6u?usp=sharing">google drive repository</a> </p>
                </div>
            </div>
        </div>
    );
}

export default GridPage;