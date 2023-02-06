export const mapGraph = {
    Gurluk:
    {
        Stein: {
            distance: 320,
        },
        Berg: {
            distance: 893,
        },
    },
    Stein:
    {
        Gurluk: {
            distance: 320,
        },
        Berg: {
            distance: 812,
        },
        Tuy: {
            distance: 1373,
        },
    },
    Berg:
    {
        Stein: {
            distance: 812,
        },
        Gurluk: {
            distance: 893,
        },
        HaThuy: {
            distance: 1965,
        },
        Tuy: {
            distance: 988,
        }, 
    },
    Tuy:
    {   
        Stein: {
            distance: 1373,
        },
        Berg: {
            distance: 988,
        },
        Trang: {
            distance: 397,
        },
        HueTra: {
            distance: 538,
        },
        HaThuy: {
            distance: 776,
        },
        Castro: {
            distance: 931,
        },
        Myoporizi: {
            distance: 1724,
        },
        Namely: {
            distance: 1348,
        },
        Komendrod: {
            distance: 1252,
        },
        Derencsza: {
            distance: 1445,
        },
        },
    Trang:
    {
        Tuy: {
            distance: 397,
        },
        HueTra: {
            distance: 705,
        },
        HaThuy: {
            distance: 862,
        },
        Castro: {
            distance: 1018,
        },
        Namely: {
            distance: 1947,
        },
        Komendrod: {
            distance: 1430,
        },
        Derencsza: {
            distance: 1632,
        },
        Myoporizi: {
            distance: 1892,
        },
    },
    HueTra:
    {
        Trang: {
            distance: 705,
        },
        Tuy: {
            distance: 538,
        },
        HaThuy: {
            distance: 423,
        },
        Castro: {
            distance: 608,
        },
        Namely: {
            distance: 1657,
        },
        Komendrod: {
            distance: 1579,
        },
        Derencsza: {
            distance: 1178,
        },
        Myoporizi: {
            distance: 2036,
        },
    },
    HaThuy:
    {
        HueTra: {
            distance: 423,
        },
        Castro: {
            distance: 289,
        },
        Trang: {
            distance: 1001,
        },
        Tuy: {
            distance: 776,
        }, 
        Berg: {
            distance: 1965,
        },
        Namely: {
            distance: 1854,
        },
        Myoporizi: {
            distance: 2287,
        },
        Komendrod: {
            distance: 1782,
        },
        Derencsza: {
            distance: 1990,
        },
    },
    Castro:
    {
        HaThuy: {
            distance: 289,
        },
        Tuy: {
            distance: 931,
        },
        Trang: {
            distance: 1018,
        },
        Lutunum: {
            distance: 2177,
        },
        Myoporizi: {
            distance: 1063,
        },
        Komendrod: {
            distance: 1849,
        },
        Derencsza: {
            distance: 2044,
        }, 
        HueTra: {
            distance: 608,
        },
    },
    Myoporizi:
    {
        Derencsza: {
            distance: 930,
        },
        Komendrod: {
            distance: 753,
        },
        Namely: {
            distance: 1343,
        },
        Lutunum: {
            distance: 1708,
        },
        Castro: {
            distance: 1063,
        },
        Tuy: {
            distance: 1724,
        }, 
        Trang: {
            distance: 1892,
        },
        HueTra: {
            distance: 2036,
        },
        HaThuy: {
            distance: 2287,
        },
    },
    Komendrod:
    {
        Castro: {
            distance: 1849,
        },
        Tuy: {
            distance: 1252,
        },
        Trang: {
            distance: 1430,
        },
        HueTra: {
            distance: 1579,
        },  
        HaThuy: {
            distance: 1782,
        },
        Myoporizi: {
            distance: 753,
        },
        Namely: {
            distance: 913,
        },   
        Derencsza: {
            distance: 381,
        },
    },
    Derencsza:
    {
        Komendrod: {
            distance: 381,
        },
        Myoporizi: {
            distance: 930,
        },
        Namely: {
            distance: 1112,
        },
        Tuy: {
            distance: 1445,
        }, 
        Trang: {
            distance: 1632,
        },
        HueTra: {
            distance: 1178,
        },
        HaThuy: {
            distance: 1990,
        },
        Castro: {
            distance: 2044,
        },
    },
    Namely:
    {
        Hajdu: {
            distance: 497,
        },
        Komendrod: {
            distance: 913,
        },
        Derencsza: {
            distance: 1112,
        },
        Myoporizi: {
            distance: 1343,
        },
        Tuy: {
            distance: 1348,
        },
        Trang: {
            distance: 1947,
        },
        HaThuy: {
            distance: 1854,
        },
        HueTra: {
            distance: 1657,
        },
    },
    Hajdu:
    {
        Namely: {
            distance: 497,
        },
        Lutunum: {
            distance: 911,
        },
    },
    Lutunum:
    {
        Myoporizi: {
            distance: 1708,
        },
        Castro: {
            distance: 2177,
        },
        Hajdu: {
            distance: 911,
        },
    },
}