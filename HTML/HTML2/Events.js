class t_events{ // t_list_of_events_and_functions
	eventss;
	constructor(){
		this.eventss = [];
		
	}
	add_event_uab(event_name,listener){
		if(this.eventss.length ==0){
			this.eventss.push(event_name);
			this.eventss[event_name] = [];
		}
		else{
			if(this.eventss.indexOf[event_name] == -1){ // nu este in lista
				this.eventss.push[event_name];
				this.eventss[event_name] = [];
				
			}
		}
		this.eventss[event_name].push(listener);
	}
	call_event_uab(event_name,params){
		this.eventss[event_name].forEach(i => i(params));
		
	}
}