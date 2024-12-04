'use client'

// react-dependencies
import { useState, useEffect } from "react";
import NavLink from "next/link";


// actions
import { getCurrencyList } from "@/actions";


// MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// styles
import './main.scss'
import Preloader from '../assets/preloader.svg'

// types
interface IOneCurrency {
  ID: string,
  NumCode: string,
  CharCode: string,
  Nominal: number,
  Name: string,
  Value: number
}



export default function Home() {


  const [currencyList, setCurrencyList] = useState([]);
  const getAsyncCurrencyList = async () => {
    const data = await getCurrencyList();
    setCurrencyList(data.arrayData);
  }

  useEffect(() => {
    getAsyncCurrencyList()
  }, [])


  console.log('currencyList = ', currencyList)


  return (
    <section className="home">
      <div className="home__body">

        <h1 className="home__title">Главная</h1>

        {
          currencyList.length === 0 && <Preloader className="preloader" />
        }

        <div className="home__table">
          <Table className="table">
              <TableHead className="table__head">
                <TableRow>
                  <TableCell className="table__title">Цифр. код</TableCell>
                  <TableCell className="table__title">Букв. код</TableCell>
                  <TableCell className="table__title">Единиц</TableCell>
                  <TableCell className="table__title">Валюта</TableCell>
                  <TableCell className="table__title">Курс</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="table__body">
                {
                   currencyList.length > 0 
                                            &&
                   currencyList.map((currency:IOneCurrency) => {
                      return (
                        <TableRow key={currency.ID} className="table__row">

                                <TableCell className="table__num-code">
                                  {currency.NumCode}
                                </TableCell>
                                <TableCell className="table__chart-code">
                                  {currency.CharCode}
                                </TableCell>
                                <TableCell 
                                  className={'table__nominal'}
                                >
                                  {currency.Nominal}
                                </TableCell>
                                <TableCell
                                  className={'table__name'}
                                >
                                  {currency.Name}
                                </TableCell>
                                <TableCell
                                  className={'table__value'}
                                >
                                  {currency.Value}
                                </TableCell>

                        </TableRow>
                      )
                    })
                 }
              </TableBody>
            </Table>
          </div>

      </div>
    </section>
  );
}
