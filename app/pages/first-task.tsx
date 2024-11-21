import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import Alert from './alert';

export default function FirstTask() {
    const [count, setCount] = useState<number>(1);
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    useEffect(() => {
        if(count == 0) setShowAlert(true);
        else setShowAlert(false);
    }, [count]);

    useEffect(() => {
        if (showAlert) {
          const timer = setTimeout(() => {
            setShowAlert(false);
          }, 7000); 
    
          return () => clearTimeout(timer);
        }
    }, [showAlert]);
    
    return (
        <>
            {showAlert && (
                <Alert
                    message='The number cannot be less than 0'
                    type="error"
                    onClose={handleCloseAlert}
                />
            )}
            <div className='text-center'>
                <b>Counter: {count} times</b>
                <div className='flex gap-4 mt-4 justify-center'>
                    <Button color="primary" className='bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg' onClick={handleIncrement}>
                        Increment
                    </Button>  

                    <Button color="primary" className='bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg' onClick={handleDecrement}>
                        Decrement
                    </Button>  
                </div>
            </div>
        </>
    )
}
