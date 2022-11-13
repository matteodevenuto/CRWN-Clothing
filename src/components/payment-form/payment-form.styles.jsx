import styled from 'styled-components';
import Button from '../button/button.component';

export const DisclaimerContainer = styled.div`
	color: red;
	text-align: center;
	font-family: Arial;
	margin-bottom: 20px;
`;

export const PaymentFormContainer = styled.div`
	height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const FormContainer = styled.form`
	height: 100px;
	min-width: 500px;
`;

export const PaymentButton = styled(Button)`
	margin-left: auto;
	margin-top: 30px;
`;
