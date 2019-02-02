/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nuguru.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nuguru.service.ClientService;
import com.nuguru.entities.Client;
import com.nuguru.entities.Order;
import javax.validation.constraints.NotNull;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

/**
 *
 * @author nuguru
 */
@RestController
@RequestMapping("/api/clients")
public class ClientController {
    private ClientService clientService;

    public ClientController(ClientService cltService) {
        this.clientService = cltService;
    }

    @GetMapping(value = { "", "/" })
    public @NotNull Iterable<Client> getClients() {
        return clientService.getAllClients();
    } 
   // @RequestMapping(value = "/api/clients",method = RequestMethod.POST)
   @PostMapping
    public ResponseEntity<Client> createClient(@RequestBody Client c){
       clientService.save(c);
       String uri = ServletUriComponentsBuilder
          .fromCurrentServletMapping()
          .path("/clients/{id}")
          .buildAndExpand(c.getId())
          .toString();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", uri);

        return new ResponseEntity<>(c, headers, HttpStatus.CREATED);
   }
}
