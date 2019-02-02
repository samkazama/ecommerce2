/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nuguru.service;

import com.nuguru.entities.Client;
import java.util.Optional;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import org.springframework.validation.annotation.Validated;

/**
 *
 * @author nuguru
 */
@Validated
public interface ClientService {
    
    @NotNull Iterable<Client> getAllClients();

    Optional<Client> getClient(@Min(value = 1L, message = "Invalid product ID.") long id);

    Client save(Client client);
}
