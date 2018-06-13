module.exports = function main(mileage,wait_time)
{
    let mil_price,total_price;
    if(mileage<=2) mil_price=6;
    else if(mileage<=8) mil_price=6+(mileage-2)*0.8;
    else mil_price=10.8+(mileage-8)*1.2;
    total_price=mil_price+wait_time*0.25;
    return Math.round(total_price);
};
    