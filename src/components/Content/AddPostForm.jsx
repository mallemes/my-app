import {Field, reduxForm} from "redux-form";
import {MyTextarea} from "../Myhtml/MyFields";
import {maxLengthCR, required} from "../../utils/validators/validator";
import React from "react";
const max = maxLengthCR(30)

const AddPostForm = (props) => {
    return (<form action="" onSubmit={props.handleSubmit}>
        <div>
            <Field component={MyTextarea} placeholder="insert text" validate={[required, max]} name={'post'} cols="150"
                   rows="4"/>{' '}
            <button type="submit" disabled={props.pristine || props.submitting}>
                Submit
            </button>
            <button type="button" style={{backgroundColor: "red"}} disabled={props.pristine || props.submitting}
                    onClick={props.reset}>
                Clear
            </button>
        </div>
    </form>)
}
export default reduxForm({form: "addPostForm"})(AddPostForm);