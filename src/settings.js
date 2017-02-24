/**
 * Created by gomes on 16/10/16.
 */
// theme settings
import {
    blueGrey500, blueGrey300, blueGrey700,
    blue500, blue300, blue700,
    grey300,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const theme = getMuiTheme({
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: blueGrey500,
        primary2Color: blueGrey300,
        primary3Color: blueGrey700,
        accent1Color: blue500,
        accent2Color: blue300,
        accent3Color: blue700,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: blueGrey500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    },
});