import React from "react";
import '../ParamsEditor.css'
import {MyInput} from "../../UI/UIComponents/MyInput";
import {StyledEditContainer} from "../../StyledEditor";

export interface Param {
    id: number;
    name: string;
    type?: any
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


export class ParamsEditor extends React.Component<Props> {

    constructor(props: Props) {
        super(props);


    }

    public getModel(): Model{
        return this.props.model
    }

    render() {

        const changeHandle = (e:React.ChangeEvent<HTMLInputElement>, v: ParamValue) => {
            v.value = e.target.value
            console.log(this.getModel())
            console.log('v.value', v)
        }

        // написать колбек changeHandler который заберет всю логику из onChange

        return (
            <StyledEditContainer>
                <div >
                    {
                        this.props.params.map((param: Param) => {
                            console.log('param', param)
                            return <div key={param.id}>{param.name}</div>
                        })
                    }
                </div>

                <div>
                    {
                        this.getModel().paramValues.map((v:ParamValue ) => {
                            return <div key={v.paramId}>
                                <MyInput
                                    type="text"
                                   defaultValue={v.value}
                                   onChange={(e) => changeHandle(e, v)}

                                       />
                            </div>

                        })
                    }
                </div>




            </StyledEditContainer>
        )
    }
}