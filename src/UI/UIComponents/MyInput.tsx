import React from 'react';
import styled from "styled-components";

export const StyledInput = styled.input`
    background: lightgrey;
    border: none;
    border-radius: 10px;
    padding: 0px 10px ;
    margin-left: 30px;
    text-align: center;
    `
interface IMyInput {
    type: string
    defaultValue: string
    onChange: (prop: React.ChangeEvent<HTMLInputElement>) => void
}

export const MyInput = (props: IMyInput) => {
    return (
        <div>
            <StyledInput {...props} />
        </div>
    );
};

