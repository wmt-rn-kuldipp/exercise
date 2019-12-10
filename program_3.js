function kd (a, b) 
{
    if (!((a % 3 == 0 || a % 7 == 0) && (b % 3 == 0 || b % 7 == 0))) {
    return ((a % 3 == 0 || a % 7 == 0) || (b % 3 == 0 || b % 7 == 0));
    }
    else
    return false;
    }
    console.log(kd(14,20));