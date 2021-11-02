export interface Location {
    name: String;
    region: String;
    country: String;
    localtime: String;
}

export interface Current {
    temp_c: String;
    wind_kph: String;
    feelslike_c: String;
    condition: Condition;
}

export interface Clima {
    location: Location;
    current: Current;
}

export interface Condition {
    text: String;
    icon?: String;  
}