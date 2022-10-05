import SignInForm from '../../sign-in-form/sign-in-form.component.jsx';
import SignUpForm from '../../sign-up-form/sign-up-form.component.jsx';
import Button from '../../button/button.component';
import FormInput from '../../form-input/form-input.component.jsx';

import './authentication.styles.scss';

const Authentication = () => {
	return (
		<div className="authentication-container">
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
