import { TouchableOpacity, View, Text } from "react-native"


interface iButtonProps {
    order: number;
    children: React.ReactNode;
    onPress: () => void;
}

export const Button = (props: iButtonProps) => {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View>
                {props.children}
            </View>
        </TouchableOpacity>
    );
}