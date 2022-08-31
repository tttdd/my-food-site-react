import {createTheme, LinkProps} from "@mui/material";
import Link from 'next/link';
import React from "react";

// let theme = createTheme({
//     palette:{
//
//     }
// });
const LinkBehavior=React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'color'>>((props, ref)=>{
    const { href,children, ...other } = props;
    return <Link ref={ref} href={href ?? '/'} {...other}>{children}</Link>
})

export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            contrastText: 'white',
        },
    },
    components:{
        MuiButton:{
            styleOverrides:{
                contained:{
                    backgroundColor: 'rgba(9, 166, 109, 1)',
                    fontFamily: 'DM Sans',
                    fontWeight: 400,
                    fontSize: 18,
                    color: 'rgba(255, 255, 255, 1)',
                    opacity: 0.9,
                    transition: '0.3s',
                    "&.MuiButton-root:hover":{
                        transition: '0.3s',
                        backgroundColor: 'rgba(9, 166, 109, 1)',
                        opacity: 1,
                    }
                },
                text:{
                    fontFamily: 'DM Sans',
                    fontWeight: 400,
                    fontSize: 18,
                    color:  'rgba(9, 166, 109, 1)',
                    opacity: 0.9,
                    transition: '0.3s',
                    "&.MuiButton-root:hover":{
                        transition: '0.3s',
                        opacity: 1,
                    }

                }
            }
        },
        MuiTypography:{
            styleOverrides:{
                caption:{
                    fontFamily: 'DM Sans',
                    fontWeight: 400,
                    fontSize: 18,
                    color: 'rgba(34, 34, 34, 1)',
                },
                h1:{
                    fontFamily:'Rosario',
                    fontWeight: 700,
                    fontSize: '70px',
                    lineHeight: '90px',
                    color: "inherit"
                },
                h2:{
                    fontFamily: 'DM Sans',
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "48px",
                    lineHeight: "48px",
                },
                h3:{
                    fontFamily: 'DM Sans',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "30px",
                },
                subtitle1:{
                    fontFamily: 'DM Sans',
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "30px",
                }
            }
        },
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            } as LinkProps,
            styleOverrides:{
                root:{
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
            styleOverrides: {
                root: {}
            }
        },
    }

});

