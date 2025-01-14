import React, { CSSProperties, ReactNode } from 'react';
export type onClearHandler = (ev: any) => void;
export interface ReactCustomSearchListProps {
    /**will be shown in popup, if it is null then popup will not be visible */
    children?: React.ReactNode;
    /**input value */
    value: String;
    /**onChange function for input */
    onChange: (ev: any) => void;
    /** style object of the root element */
    rootStyle?: React.CSSProperties;
    /** style object of the parent element of text input */
    inputContainerStyle?: CSSProperties;
    /** style object of the input element */
    inputStyle?: CSSProperties;
    /** style object for popper container */
    popperStyle?: CSSProperties;
    /** defautl value is "search" */
    placeholder?: string;
    /** keydown handler for the input */
    onKeyDown?: (ev: any) => void;
    /** focus handler for the input */
    onFocus?: (ev: any) => void;
    /** blur handler for the input */
    onBlur?: (ev: any) => void;
    /** set popper width same as input, default value is true */
    fullWidth?: boolean;
    /** popper's placement, default value is "bottom-start" */
    placement?: 'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** custom Clear icon */
    ClearIconComponent?: (props: { value: string, onClear: onClearHandler }) => ReactNode;
    /** custom Magnifier icon */
    MagnifierIconComponent?: () => ReactNode;
    /** triggerd when the user clicks on the default Clear icon */
    onClear?: onClearHandler;
    /** searchbox theme, default value is "outline" */
    theme?: "underline" | "outline" | "panel";
    /** if set true then borderRadius would be "5px", default value is true */
    corner?: boolean;
    /** autoFocus attribute for the input element, default value is false */
    autoFocus?: boolean;
    /** name attribute for the input element */
    inputName?: string;
    /** if it is true then the suggestion list will be open when the user clicks on the input, default value is true */
    openOnClick?: boolean;
    /** it it returns true then the suggestion list will be open, default value is (e) => e.key === 'Enter' */
    openOnKeyDown?: boolean;
}
declare const ReactCustomSearchList: (props: ReactCustomSearchListProps) => ReactNode;
export default ReactCustomSearchList;