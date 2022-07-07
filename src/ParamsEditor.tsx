import React, { ChangeEvent } from "react";
import styled from "styled-components";

export interface Param {
  id: number;
  name: string;
  type?: any;
}

export interface ParamValue {
  paramId: number;
  value: string;
}

export interface Model {
  paramValues: ParamValue[];
}

export interface Props {
  params: Param[];
  model: Model;
}

interface State {
  model: Model;
}

export const StyledWrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

export const StyledInput = styled.input`
  background: #d3d3d3;
  border: none;
  border-radius: 10px;
  text-align: center;
`;

interface IProps {
  param: ParamValue;
  handleChange: (e: ChangeEvent<HTMLInputElement>, param: ParamValue) => void;
}

const Input: React.FC<IProps> = ({ param, handleChange }) => (
  <div key={param.paramId}>
    <StyledInput
      type="text"
      value={param.value}
      onChange={(e) => handleChange(e, param)}
    />
  </div>
);

export class ParamsEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      model: this.props.model,
    };
  }

  public getModel() {
    return this.state.model;
  }

  private setParam(id: number, value: string) {
    const newParamValues = this.state.model.paramValues.map((item, index) => {
      if (item.paramId === id) {
        return {
          ...item,
          value,
        };
      }
      return item;
    });

    this.setState({
      model: {
        paramValues: newParamValues,
      },
    });
  }

  private handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    param: ParamValue
  ) {
    this.setParam(param.paramId, e.target.value);

    console.log("this.getModel()", this.getModel());
  }

  // ({ paramId }) => param.id === paramId
  render() {
    return (
      <>
        {this.props.params.map((param: Param) => {
          const findParam = this.state.model.paramValues.find((paramVal) => {
            return param.id === paramVal.paramId;
          });
          if (!findParam) return null;
          return (
            <StyledWrapper key={param.id}>
              {param.name}
              <Input
                param={findParam}
                handleChange={this.handleChange.bind(this)}
              />
            </StyledWrapper>
          );
        })}
      </>
    );
  }
}
