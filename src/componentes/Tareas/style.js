import styled from "styled-components";

export const AddContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 49px auto;
  @media (max-width: 767px) {
    width: 100%;
  }
  form {
    position: relative;
  }
  button {
    width: 137px;
    height: 40px;
    border-radius: 3px;
    box-shadow: 0 7px 10px -4px rgba(53, 59, 155, 0.51);
    background-image: linear-gradient(40deg, #6f70d7 18%, #81caff 107%);
    position: absolute;
    border: none;
    color: white;
    right: 10px;
    top: 13px;
    display: block;
    &:focus {
      outline: none;
    }
    @media (max-width: 767px) {
      float: right;
      margin-top: 10px;
      position: static;
    }
  }

  small {
    font-size: 17px;
    color: #000;
    font-weight: 400;
    margin-bottom: 21px;
    @media (max-width: 767px) {
      text-align: center;
    }
  }
  span {
    display: block;
  }
  input[type="text"] {
    width: 100%;
    box-shadow: 0 18px 18px -6px rgba(11, 11, 11, 0.07),
      0 -10px 16px 0 rgba(255, 255, 255, 0.44), 0 2px 4px 0 rgba(0, 0, 0, 0.07);
    background-image: linear-gradient(
      to left,
      #fbfbfb,
      #f8f8f8 46%,
      #f6f6f6 2%
    );
    border: none;
    height: 67px;
    border-radius: 5px;
    padding: 1px 20px;
    color: #3d3e9e;
    &:focus {
      outline: none;
    }
    &:focus + .focus {
      border-radius: 5px;
      z-index: -1;
      position: absolute;
      top: -2px;
      left: -2px;
      bottom: -2px;
      right: -2px;
      height: 71px;
      border-style: solid;
      border-width: 2px;
      border-image-source: linear-gradient(
        to right,
        #6f77d7,
        rgba(116, 145, 233, 0.02) 74%
      );
      border-image-slice: 1;
      background-image: linear-gradient(
          to left,
          transparent,
          #f8f8f8 46%,
          #f6f6f6 2%
        ),
        linear-gradient(to right, #6f77d7, rgba(116, 145, 233, 0.02) 74%);
      background-origin: border-box;
      background-clip: content-box, border-box;
      outline: none;
    }
    &:focus ~ button {
      display: block;
    }
    :-webkit-input-placeholder {
      /* Edge */
      color: #acacac;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #acacac;
    }

    ::placeholder {
      color: #acacac;
    }
  }
`;

export const EmptyContainer = styled.div`
  color: #b3b3b3;
  text-align: center;
  margin: 78px 0 58px;
  @media (max-width: 767px) {
    margin: 50px 0;
  }
`;
export const ListContainer = styled.div`
  li {
    .check {
      display: block;
      position: relative;
      padding-left: 21px;
      margin-bottom: 18px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      margin-left: 0;
    }
    .check input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 23px;
      width: 23px;
      box-shadow: 0 7px 11px -6px rgba(23, 28, 52, 0.23),
        0 -6px 9px 0 rgba(255, 255, 255, 0.39), 0 2px 4px 0 rgba(0, 0, 0, 0.07),
        inset 0 1px 5px 0 rgba(0, 0, 0, 0.08);
      border: solid 1px #cccccc;
      background-color: #ededed;
      border-radius: 50%;
    }

    .check:hover input ~ .checkmark {
      background-color: #ccc;
    }

    .check input:checked ~ .checkmark {
      box-shadow: 0 7px 11px -6px rgba(23, 28, 52, 0.23),
        0 -6px 9px 0 rgba(255, 255, 255, 0.39), 0 2px 4px 0 rgba(0, 0, 0, 0.07),
        inset 0 1px 5px 0 rgba(0, 0, 0, 0.08);
      border: solid 2px rgba(0, 0, 0, 0.28);
      background-color: #34d26e;
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    .check input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the checkmark/indicator */
    .check .checkmark:after {
      left: 8px;
      top: 3px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      position: relative;
      top: 0;
      background: transparent;
      padding: 0;
      box-shadow: none;
      text-align: right;
      padding-right: 15px;
      display: none;
      width: 20px;
      &:hover:before {
        content: "Eliminar";
        border-radius: 2px;
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.18);
        border: solid 1px #515151;
        background-color: rgba(0, 0, 0, 0.53);
        position: absolute;
        font-size: 12px;
        padding: 1px 5px;
        top: -8px;
        right: -75%;
        @media (max-width: 767px) {
          display: none;
        }
      }
      @media (max-width: 767px) {
        display: block;
      }
      img {
        height: 15px;
      }
    }
    position: relative;
    border-bottom: 1px solid #cbcbcb;
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.5);
    &:hove {
      cursor: pointer;
    }
    &:hover:before {
      content: "";
      opacity: 0.45;
      -webkit-filter: blur(18px);
      filter: blur(18px);
      background-color: #fff;
      z-index: -2;
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      cursor: pointer;
    }
    &:hover > .icon {
      display: block;
    }
    display: flex;
    align-items: center;
    height: 75px;
    justify-content: space-between;
    label {
      margin-bottom: 0;
      margin-left: 15px;
      z-index: 10;
      position: relative;
    }
  }
  hr {
    height: 1px;
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.5);
    background-color: #cbcbcb;
    margin: 0;
  }
  .done {
    label {
      text-decoration: line-through;
      color: #8c8c8c;
    }
  }
`;
