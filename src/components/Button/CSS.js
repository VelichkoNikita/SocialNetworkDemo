import styled from 'styled-components';


export const Button_Primary = styled.button`
  disabled: ${props => props.block ? props.block : null};
  background-color: #295E96;
  color: #ffff;
  border-radius: ${props => props.border_radius ? props.border_radius : "4px"};
  font-size: 20px;
  line-height: 1;
  transition: 0.2s;
  height: ${props => props.height ? props.height : 'auto'};
  width: ${props => props.col};
  justify-content: ${props => props.justify_content};
  align-content: ${props => props.align_content};
  align-items: ${props => props.align_items};
  text-align: ${props => props.text_align};
  align-self: ${props => props.align_self};
  margin: ${props => props.margin};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  padding: ${props => props.padding};
  border: none;

  &:hover {
    background-color: #194573;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  @media (max-width: 576px) {
  margin-top: ${props => props.mtXs};;
  margin-bottom: ${props => props.mbXs};;
    padding: 13px 15px;
    font-size: 16px;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    padding: 13px 15px;
    font-size: 16px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 13px 15px;
    font-size: 18px;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    padding: 13px 15px;
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    padding: 13px 15px;
    font-size: 20px;
  }
`

