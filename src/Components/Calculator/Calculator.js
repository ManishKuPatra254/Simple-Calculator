/* eslint-disable no-eval */
import { Fragment, useState } from 'react';
import style from './Calculator.module.css';

export function MainCalculator() {

    const [seeResult, setSeeResult] = useState('');

    function handleClickResult(e) {
        const value = e.target.value;
        if (value === 'DEL') {
            setSeeResult(seeResult.slice(0, -1));
        } else {
            setSeeResult(seeResult.concat(value));
        }
    }

    function handleClearResult() {
        setSeeResult('')
    }

    function handleCalculate() {
        setSeeResult(eval(seeResult).toString())
    }


    return (
        <Fragment>
            <div className={style.main_calcu_sec}>
                <div className={style.sub_sec}>
                    <h1>Simple Calculator</h1>
                    <input type="text" placeholder='0' className={style.input_holder} value={seeResult} />
                    <div className={style.inputs}>
                        <input type='button' value='9' onClick={handleClickResult} />
                        <input type='button' value='8' onClick={handleClickResult} />
                        <input type='button' value='7' onClick={handleClickResult} />
                        <input type='button' value='6' onClick={handleClickResult} />
                        <input type='button' value='5' onClick={handleClickResult} />
                        <input type='button' value='4' onClick={handleClickResult} />
                        <input type='button' value='3' onClick={handleClickResult} />
                        <input type='button' value='2' onClick={handleClickResult} />
                        <input type='button' value='1' onClick={handleClickResult} />
                        <input type='button' value='0' onClick={handleClickResult} />
                        <input type='button' value='+' onClick={handleClickResult} />
                        <input type='button' value='-' onClick={handleClickResult} />
                        <input type='button' value='*' onClick={handleClickResult} />
                        <input type='button' value='/' onClick={handleClickResult} />
                        <input type='button' value='%' onClick={handleClickResult} />
                        <input type='button' value='DEL' onClick={handleClickResult} />
                        <input type='button' value='=' onClick={handleCalculate} />
                        <input type='button' value='AC' onClick={handleClearResult} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}