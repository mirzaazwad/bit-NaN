package APIGateway.Core.Enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public enum Role {

    USER(Collections.emptySet()),
    ADMIN(
            Set.of(
                    Permission.ADMIN_READ,
                    Permission.ADMIN_UPDATE,
                    Permission.ADMIN_DELETE,
                    Permission.ADMIN_CREATE,
                    Permission.DEVELOPER_READ,
                    Permission.DEVELOPER_CREATE,
                    Permission.DEVELOPER_UPDATE,
                    Permission.DEVELOPER_DELETE
            )
    ),
    MANAGER(
            Set.of(
                    Permission.DEVELOPER_READ,
                    Permission.DEVELOPER_CREATE,
                    Permission.DEVELOPER_UPDATE,
                    Permission.DEVELOPER_DELETE
            )
    )

    ;

    @Getter
    private final Set<Permission> permissions;

//    public List<SimpleGrantedAuthority> getAuthorities() {
//        var authorities = getPermissions()
//                .stream()
//                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
//                .collect(Collectors.toList());
//        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
//        return authorities;
//    }
}