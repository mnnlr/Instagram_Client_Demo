import { Children, useEffect } from "react";
import { Appearance } from "react-native";
import { useDispatch } from "react-redux";
import { setTheme } from "../Redux/actions";



const ThemeListener =({children})=>{
    const dispath =useDispatch();


    useEffect(()=>{
        const colorScheme = Appearance.getColorScheme();
        console.log(colorScheme, "Initial colorScheme");
        dispath(setTheme(colorScheme === 'dark'?'dark':'light'));

        const listener = ({colorScheme})=>{
            console.log(colorScheme, "Updated colorScheme");
            dispath(setTheme(colorScheme === 'dark' ?'dark':'light'));
        };

        const subscription = Appearance.addChangeListener(listener);

        return () =>{
           subscription.remove();
        };
    },[dispath]);

    return<>{children}</>
};

export default ThemeListener;