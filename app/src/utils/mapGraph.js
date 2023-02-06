export const mapGraph = {
    Gurluk:
    {
        Stein: 320,
        Berg: 893,
    },
    Stein:
    {
        Gurluk: 320,
        Berg: 812,
        Tuy: 1373,
    },
    Berg:
    {
        Stein: 812,
        Gurluk: 893,
        HaThuy: 1965,
        Tuy: 988, 
    },
    Tuy:
    {   
        Stein: 1373,
        Berg: 988,
        Trang: 397,
        HueTra: 538,
        HaThuy: 776,
        Castro: 931,
        Myoporizi: 1724,
        Namely: 1348,
        Komendrod: 1252,
        Derencsza: 1445,
        },
    Trang:
    {
        Tuy: 397,
        HueTra: 705,
        HaThuy: 862,
        Castro: 1018,
        Namely: 1947,
        Komendrod: 1430,
        Derencsza: 1632,
        Myoporizi: 1892,
    },
    HueTra:
    {
        Trang: 705,
        Tuy: 538,
        HaThuy: 423,
        Castro: 608,
        Namely: 1657,
        Komendrod: 1579,
        Derencsza: 1178,
        Myoporizi: 2036,
    },
    HaThuy:
    {
        HueTra: 423,
        Castro: 289,
        Trang: 1001,
        Tuy: 776, 
        Berg: 1965,
        Namely: 1854,
        Myoporizi: 2287,
        Komendrod: 1782,
        Derencsza: 1990,
    },
    Castro:
    {
        HaThuy: 289,
        Tuy: 931,
        Trang: 1018,
        Lutunum: 2177,
        Myoporizi: 1063,
        Komendrod: 1849,
        Derencsza: 2044, 
        HueTra: 608,
    },
    Myoporizi:
    {
        Derencsza: 930,
        Komendrod: 753,
        Namely: 1343,
        Lutunum: 1708,
        Castro: 1063,
        Tuy: 1724, 
        Trang: 1892,
        HueTra: 2036,
        HaThuy: 2287,
    },
    Komendrod:
    {
        Castro: 1849,
        Tuy: 1252,
        Trang: 1430,
        HueTra: 1579,  
        HaThuy: 1782,
        Myoporizi: 753,
        Namely: 913,   
        Derencsza: 381,
    },
    Derencsza:
    {
        Komendrod: 381,
        Myoporizi: 930,
        Namely: 1112,
        Tuy: 1445, 
        Trang: 1632,
        HueTra: 1178,
        HaThuy: 1990,
        Castro: 2044,
    },
    Namely:
    {
        Hajdu: 497,
        Komendrod: 913,
        Derencsza: 1112,
        Myoporizi: 1343,
        Tuy: 1348,
        Trang: 1947,
        HaThuy: 1854,
        HueTra: 1657,
    },
    Hajdu:
    {
        Namely: 497,
        Lutunum: 911,
    },
    Lutunum:
    {
        Myoporizi: 1708,
        Castro: 2177,
        Hajdu: 911,
    },
}