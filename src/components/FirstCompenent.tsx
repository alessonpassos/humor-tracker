import { View, Text } from "react-native"


interface iFirstComponentProps {
    order: number;
}
export const FirstComponent = (props: iFirstComponentProps) => {

    return (
        <View>
            <Text>FirstComponent {props.order}</Text>
        </View>
    );
}