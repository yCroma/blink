{
  description = "PlemolJP font workflow (mac + nix + direnv)";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";

  outputs = { nixpkgs, ... }:
  let
    systems = [ "aarch64-darwin" "x86_64-darwin" ];
    forAllSystems = nixpkgs.lib.genAttrs systems;
  in
  {
    devShells = forAllSystems (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        default = pkgs.mkShell {
          packages = with pkgs; [
            woff2      # woff2_compress
            python3    # python -m http.server（ローカル確認用）
          ];

          shellHook = ''
            echo "Font devShell (${system})"
            echo "Try: woff2_compress *.ttf"
            echo "Try: python -m http.server 8000 --directory docs"
          '';
        };
      });
  };
}
