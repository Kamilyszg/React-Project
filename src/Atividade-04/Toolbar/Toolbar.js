export function AlertButton({message, children}){
    return(
        <div>
            <button onClick={() => alert(message)}>
                {children}
            </button>
        </div>
    );
}

export default function Toolbar(){
    return(
        <div>
            <AlertButton message={"Playing!"}>
                Play Movie
            </AlertButton>
            <AlertButton message={"Uploading!"}>
                Upload Image
            </AlertButton>
        </div>
    );
}