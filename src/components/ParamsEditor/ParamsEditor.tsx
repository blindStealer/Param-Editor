import React from "react";
import { StyledEditContainer } from "../../StyledEditor";
import { Input } from "../Input";

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
  Model: Model;
}

export class ParamsEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      Model: this.props.model,
    };
  }

  public getModel() {
    return this.state.Model;
  }

  public setParam(id: number, value: string) {
    const newParamValues = this.state.Model.paramValues.map((item, index) => {
      if (item.paramId === id) {
        return {
          ...item,
          value,
        };
      }
      return item;
    });

    this.setState({
      Model: {
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

  render() {
    return (
      <StyledEditContainer>
        <div>
          {this.props.params.map((param: Param) => {
            return <div key={param.id}>{param.name}</div>;
          })}
        </div>

        <div>
          {this.state.Model.paramValues.map((param: ParamValue) => {
            return (
              <div key={param.paramId}>
                <Input
                  type="text"
                  value={param.value}
                  onChange={(e) => this.handleChange(e, param)}
                />
              </div>
            );
          })}
        </div>
      </StyledEditContainer>
    );
  }
}
