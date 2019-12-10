function kd (a, b) 
{
    if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
    return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
    }
    else
    return false;
    }
    console.log(kd(14,20));