import React from 'react';
import Form from 'react-bootstrap/Form';


interface FilterParameterProps {
    id: number
    name: string
    onChange?: () => any
}


const FilterParameter = (props: FilterParameterProps) => {
    return (
        <div>
            <Form.Check
                inline
                label={props.name}
                onChange={props.onChange || function() {}}
                type={'checkbox'}
                id={`inline-checkbox-${props.id}`}/>
        </div>
    );
};

export default FilterParameter;
