type Props  = {
    name: string;
    age: number;
}

export const Header = ({name , age}: Props) => {

    return(
        <div>
            Olá {name}, parabéns pelos {age} anos!
        </div>
    )
}